'use client'

import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import FeatherIcon from 'feather-icons-react'

export function AuthBtn() {
    const router = useRouter()
    const pathname = usePathname() ?? '/'
    const { data: session } = useSession()
    
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
    
    if (session) {
        return (
            <>
                <button
                    title="Go to dashboard"
                    className='cursor-pointer w-7 h-7'
                    onClick={() => router.push(`${basePath}/dashboard`)}
                >
                    {session.user?.image ? (
                        <Image
                            src={session.user.image}
                            alt={session.user.name ?? ''}
                            width={60}
                            height={60}
                            className="rounded-full opacity-90 hover:opacity-100"
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