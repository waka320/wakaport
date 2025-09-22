"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from "./ThemeToggle"
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 text-black dark:text-white border-b border-gray-200 dark:border-gray-700 w-full shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <Link href="/" >
            <h1 className="text-xl font-bold border-none mb-0 title-pop">
              WakamatsuYukiの<span className="room-text">部屋</span><span className="dot-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* デスクトップ用ナビゲーション */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/" className={`transition-colors hover:text-orange-500 dark:hover:text-orange-300 ${pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
          <Link href="/about" className={`transition-colors hover:text-orange-500 dark:hover:text-orange-300 ${pathname === '/about' ? 'font-bold' : ''}`}>About</Link>
          <Link href="/contact" className={`transition-colors hover:text-orange-500 dark:hover:text-orange-300 ${pathname === '/contact' ? 'font-bold' : ''}`}>Contact</Link>
        </nav>

        <div className="flex items-center">
          <ThemeToggle />
          {/* ハンバーガーメニュー（モバイル用） */}
          <button
            className="ml-4 md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* モバイル用ナビゲーションメニュー */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 shadow-md p-3 border-t border-gray-200 dark:border-gray-700 animate-slideDown">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`py-2 transition-colors hover:text-orange-500 dark:hover:text-orange-300 ${pathname === '/' ? 'font-bold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`py-2 transition-colors hover:text-orange-500 dark:hover:text-orange-300 ${pathname === '/about' ? 'font-bold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`py-2 transition-colors hover:text-orange-500 dark:hover:text-orange-300 ${pathname === '/contact' ? 'font-bold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
