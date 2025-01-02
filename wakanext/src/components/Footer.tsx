export default function Footer() {
    return (
        <footer
            className="
                theme-footer
                bg-[var(--background)] 
                text-[var(--foreground)]
                border-t-[var(--border-color)] 
                w-full 
                p-4
            "
        >
            © {new Date().getFullYear()} Yuki
        </footer>
    )
}
