"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from "./ThemeToggle"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="theme-header bg-[var(--background)] text-[var(--foreground)] border-b border-[var(--border-color)] w-full shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <Link href="/" >
            <h1 className="text-xl font-bold border-none mb-0">Wakaport.</h1>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={`link ${pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
          <Link href="/about" className={`link ${pathname === '/about' ? 'font-bold' : ''}`}>About</Link>
          <Link href="/progress" className={`link ${pathname === '/progress' ? 'font-bold' : ''}`}>Progress</Link>
          <Link href="/news" className={`link ${pathname === '/news' ? 'font-bold' : ''}`}>News</Link>
          <Link href="/contact" className={`link ${pathname === '/contact' ? 'font-bold' : ''}`}>Contact</Link>
        </nav>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
