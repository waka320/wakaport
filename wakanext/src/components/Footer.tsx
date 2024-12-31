export default function Footer() {
    return (
        <footer className="theme-footer
        bg-[var(--background)] 
        text-[var(--foreground)]
        border-t-[var(--border-color)] w-full bg-gray-900 text-white p-4">
            © {new Date().getFullYear()} Yuki
        </footer>
    )
}
