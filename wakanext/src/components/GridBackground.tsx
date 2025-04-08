"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function GridBackground({ children }: { children: React.ReactNode }) {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className={`grid-background ${mounted && resolvedTheme === 'dark' ? 'dark' : ''}`}>
            {children}
        </div>
    )
}
