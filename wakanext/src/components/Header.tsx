import Link from 'next/link'

export default function Header() {
  return (
    <header className="theme-header bg-[var(--background)] text-[var(--foreground)]border-b-[var(--border-color)] w-full shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" >
          <h1 className="my-auto text-xl font-bold border-none">Wakaport.</h1>
        </Link>
      </div>

      <nav className="flex space-x-4">
        <Link href="/" className="link">Home</Link>
        <Link href="/about" className="link">About</Link>
        <Link href="/progress" className="link">Progress</Link>
        <Link href="/news" className="link">News</Link>
        <Link href="/contact" className="link">Contact</Link>
      </nav>
    </header>
  )
}
