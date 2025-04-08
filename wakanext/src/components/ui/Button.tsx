import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    href?: string;
    withArrow?: boolean;
    external?: boolean;
}

export const Button = ({
    children,
    type = 'button',
    className = '',
    onClick,
    disabled = false,
    href,
    withArrow = false,
    external = false
}: ButtonProps) => {
    // CSSカスタムプロパティを参照するのではなく、テーマに応じた固定の色を使用
    const baseClasses = "inline-flex items-center px-4 py-2 bg-orange-500 dark:bg-orange-600 text-white font-medium text-sm rounded-md hover:bg-orange-600 dark:hover:bg-orange-500 transition-colors duration-300 group shadow-sm";
    const combinedClasses = `${baseClasses} ${className}`;

    const arrow = withArrow && (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    );

    // hrefがある場合はLinkコンポーネントを返す
    if (href) {
        const linkProps = external ? {
            target: "_blank",
            rel: "noopener noreferrer"
        } : {};

        return (
            <Link
                href={href}
                className={combinedClasses}
                {...linkProps}
            >
                {children}
                {arrow}
            </Link>
        );
    }

    // hrefがない場合は通常のbuttonを返す
    return (
        <button
            type={type}
            className={combinedClasses}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
            {arrow}
        </button>
    );
};
