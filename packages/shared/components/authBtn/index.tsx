import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'nextra/hooks'
import { IconLogin, IconUser } from './icons'

export function AuthBtn() {
    const router = useRouter()
    const { data: session } = useSession()
    const callbackBase = `${router.basePath}/`
    const currentUrl = router.asPath
    if (session) {
        return (
            <>
                <button
                    title="Go to dashboard"
                    onClick={() => router.push(callbackBase + 'dashboard')}
                >
                    {session.user?.image ? (
                        <Image
                            src={session.user.image}
                            alt={session.user.name ?? ''}
                            width={50}
                            height={50}
                            className="w-7 h-7 rounded-full opacity-90 m-4 hover:opacity-100"
                        />
                    ) : (
                        <IconUser className="opacity-50 hover:opacity-90" />
                    )}
                </button>
            </>
        )
    }
    return (
        <>
            <button
                title="Login"
                onClick={() =>
                    signIn('azure-ad', {
                        callbackUrl: currentUrl
                    })
                }
            >
                <IconLogin className="opacity-50 m-4 hover:opacity-90 larger" />
            </button>
        </>
    )
}

export default AuthBtn
