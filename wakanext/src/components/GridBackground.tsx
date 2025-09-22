"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function GridBackground({ children }: { children: React.ReactNode }) {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const pathname = usePathname()

    return (
        <div className={cn(
            "grid-background",
            mounted && resolvedTheme === 'dark' && 'dark',
            pathname === '/' && 'psy'
        )}>
            {children}
        </div>
    )
}
