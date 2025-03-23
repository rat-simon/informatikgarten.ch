'use client'

import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import FeatherIcon from 'feather-icons-react'

export function AuthBtn() {
    const router = useRouter()
    const pathname = usePathname()
    const { data: session } = useSession()
    
    // In App Router, there's no direct equivalent to basePath
    // You can use a constant or environment variable if needed
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
    
    if (session) {
        return (
            <>
                <button
                    title="Go to dashboard"
                    onClick={() => router.push(`${basePath}/dashboard`)}
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
                        <FeatherIcon size={24} icon="user-check" />
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
                        callbackUrl: pathname
                    })
                }
            >
                <FeatherIcon size={24} icon="log-in" />
            </button>
        </>
    )
}

export default AuthBtn