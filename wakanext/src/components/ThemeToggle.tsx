"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    // マウント後のみレンダリングするためのエフェクト
    useEffect(() => {
        setMounted(true)
    }, [])

    // テーマ変更時にカスタムプロパティを更新
    useEffect(() => {
        if (mounted) {
            document.documentElement.className = `${resolvedTheme}-theme`;

            const gridBackground = document.querySelector('.grid-background');
            if (gridBackground) {
                gridBackground.className = `grid-background ${resolvedTheme}-theme`;
            }
        }
    }, [resolvedTheme, mounted]);

    if (!mounted) return null

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="relative h-8 w-14 rounded-full bg-gray-200 p-1 transition-colors duration-300 dark:bg-gray-700 focus:outline-none"
            aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
        >
            <div className="flex h-full w-full items-center justify-between">
                <motion.div
                    className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md dark:bg-gray-800"
                    animate={{
                        x: resolvedTheme === 'dark' ? '24px' : '0px',
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }}
                >
                    {resolvedTheme === 'dark' ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-4 w-4 text-yellow-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-4 w-4 text-orange-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                            />
                        </svg>
                    )}
                </motion.div>
            </div>
        </button>
    )
}
