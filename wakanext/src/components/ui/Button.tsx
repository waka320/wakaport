import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    href?: string; // hrefプロパティを追加
}

export const Button = ({
    children,
    type = 'button',
    className = '',
    onClick,
    disabled = false,
    href
}: ButtonProps) => {
    // hrefがある場合はLinkコンポーネントを返す
    if (href) {
        return (
            <Link
                href={href}
                className={className}
            >
                {children}
            </Link>
        );
    }

    // hrefがない場合は通常のbuttonを返す
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
