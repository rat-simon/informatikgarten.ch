import { useEffect, useState } from 'react'

interface CodeData {
    code: string
    expiresIn: number
}

export function LoginCodes() {
    const [codes, setCodes] = useState<CodeData[]>([])

    useEffect(() => {
        const fetchCodes = async () => {
            const res = await fetch('/api/incoming_mails')
            const data = await res.json()
            // Sort codes by timestamp in descending order (newest first)
            const sortedCodes = data.codes.sort(
                (a, b) =>
                    (b.timestamp || Date.now()) - (a.timestamp || Date.now())
            )
            setCodes(sortedCodes)
        }

        fetchCodes()
        const interval = setInterval(fetchCodes, 5000) // Refresh every 5 seconds
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Aktive Login-Codes</h1>
            <div className="space-y-4">
                {codes.map((code, i) => (
                    <div key={i} className="border p-4 rounded">
                        <div className="text-xl">{code.code}</div>
                        <div className="text-sm text-gray-500">
                            Noch {Math.floor(code.expiresIn)} Sekunden gültig
                        </div>
                    </div>
                ))}
                {codes.length === 0 && (
                    <p className="text-gray-500">
                        Aktuell keine aktive Login-Codes
                    </p>
                )}
            </div>
        </div>
    )
}

export default LoginCodes
