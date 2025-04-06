import Link from "next/link";

type ButtonProps = {
    href?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
};

export function Button({ href, type = "button", onClick, children, className = "" }: ButtonProps) {
    const baseClasses = "inline-flex items-center px-4 py-2 bg-[var(--accent)] text-white text-sm rounded-md hover:bg-[var(--accent-hover)] transition-colors duration-300";
    const classes = `${baseClasses} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
        </button>
    );
}
