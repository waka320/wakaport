import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Wakaport</h1>
      </div>

      <nav className="flex space-x-4">
        <Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link>
        <Link href="/about" className="text-gray-800 hover:text-blue-600">About</Link>
        <Link href="/products" className="text-gray-800 hover:text-blue-600">Products</Link>
        <Link href="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
      </nav>
    </header>
  )
}
