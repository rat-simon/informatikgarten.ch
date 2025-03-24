import { prisma } from 'shared/server/lib/prisma'
import { getUserRoles } from 'shared/server/lib/serverGetUserRoles'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { logger } from 'shared/utils'
import NextAuth from 'next-auth'
import AzureADProvider from 'next-auth/providers/azure-ad'

const { env } = process
const authorizationUrl =
    'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
const tokenUrl = 'https://login.microsoftonline.com/common/oauth2/v2.0/token'

function nowInSeconds() {
    return Math.trunc(Date.now() / 1000)
}

async function refreshAccessToken(accessToken) {
    try {
        const body = new URLSearchParams({
            client_id: env.AZURE_AD_CLIENT_ID || 'azure-ad-client-id',
            client_secret:
                env.AZURE_AD_CLIENT_SECRET || 'azure-ad-client-secret',
            grant_type: 'refresh_token',
            refresh_token: accessToken.refreshToken,
            authorization: authorizationUrl,
            token: tokenUrl
        })
        const response = await fetch(tokenUrl, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            method: 'POST',
            body
        })

        const refreshedTokens = await response.json()
        if (!response.ok) {
            logger.warn('Response not ok on refreshing access token.')
            throw refreshedTokens
        }

        logger.info('Successfully refreshed access token.')
        return {
            ...accessToken,
            accessToken: refreshedTokens.id_token,
            accessTokenExpires: nowInSeconds() + refreshedTokens.expires_in,
            refreshToken:
                refreshedTokens.refresh_token ?? accessToken.refreshToken
        }
    } catch (error) {
        return { ...accessToken, error: 'RefreshAccessTokenError' }
    }
}

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    debug: process.env.NODE_ENV === 'development',
    providers: [
        AzureADProvider({
            clientId: env.AZURE_AD_CLIENT_ID ?? 'azure-ad-client-id',
            clientSecret: env.AZURE_AD_CLIENT_SECRET ?? 'azure-ad',
            httpOptions: { timeout: 10000 },
            authorization: {
                params: { scope: 'openid profile email offline_access' }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, ...rest }) {
            // Receives { user, account } from OAuth provider
            // Handles database operations
            // Returns true/false to allow/deny sign in
            if (!account) return false
            // user = current user i have
            // 
            logger.debug('⭐ Start SignIn', {
                email: user.email,
                provider: account.provider,
                user,
                account, rest
            })

            try {
                return await prisma.$transaction(async tx => {
                    // 1. Check existing account
                    const existingAccount = await tx.account.findUnique({
                        where: {
                            provider_providerAccountId: {
                                provider: account.provider,
                                providerAccountId: account.providerAccountId
                            }
                        },
                        include: { user: true }
                    })

                    // 2. Check existing user
                    const existingUser = await tx.user.findUnique({
                        where: { email: user.email },
                        include: { accounts: true }
                    })

                    // Handle orphaned account
                    if (existingAccount && !existingAccount.user) {
                        await tx.account.delete({
                            where: { id: existingAccount.id }
                        })
                    }

                    // Update existing user with name and image
                    console.log('existingUser', existingUser, user, !!existingUser?.name)
                    if (existingUser && (existingUser.name !== user.name || existingUser.image !== user.image)) {
                        await tx.user.update({
                            where: { id: existingUser.id },
                            data: {
                                name: user.name,
                                image: user.image
                            }
                        })
                        existingUser.name = user.name
                        existingUser.image = user.image
                    }

                    // Get or create user
                    const finalUser =
                        existingUser ||
                        (await tx.user.create({
                            data: {
                                email: user.email,
                                name: user.name,
                                image: user.image
                            }
                        }))

                    // Create new account if needed
                    if (!existingAccount) {
                        await tx.account.create({
                            data: {
                                userId: finalUser.id,
                                type: account.type,
                                provider: account.provider,
                                providerAccountId: account.providerAccountId,
                                refresh_token: account.refresh_token,
                                access_token: account.access_token,
                                expires_at: account.expires_at,
                                token_type: account.token_type,
                                scope: account.scope,
                                id_token: account.id_token,
                                session_state: account.session_state
                            }
                        })
                        logger.info('Created new account for user', {
                            userId: finalUser.id
                        })
                    }

                    return true
                })
            } catch (error) {
                logger.error('SignIn error:', error)
                return false
            }
        },

        async session({ session, user }) {
            // Runs on every page load
            // Receives { session }
            // Creates client-side session
            // Used to customize session data
            // Cannot access database directly
            logger.debug('🧑‍🤝‍🧑 start Session', {
                hasSession: !!session,
                hasUser: !!user,
                user
            })

            if (session?.user) {
                session.user.id = user.id
                session.user.roles = await getUserRoles(user.id)
                logger.debug('👮 User roles', session.user.roles)
            }
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
export default handler
