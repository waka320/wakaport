import Link from 'next/link';
import React, { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline';
};

export function Button({
    children,
    href,
    onClick,
    disabled = false,
    className = '',
    type = 'button',
    variant = 'primary'
}: ButtonProps) {
    const baseClasses = `
        btn 
        rounded-lg 
        px-4 
        py-2 
        transition-all 
        duration-300 
        ease-in-out 
        focus:outline-none 
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `;

    const variantClasses = {
        primary: 'bg-black text-white hover:bg-gray-800',
        secondary: 'bg-gray-200 text-black hover:bg-gray-300',
        outline: 'border-2 border-black bg-transparent text-black hover:bg-black hover:text-white'
    };

    const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${className}`;

    if (href) {
        return (
            <Link
                href={href}
                className={combinedClassName}
                onClick={disabled ? undefined : onClick}
                aria-disabled={disabled}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
            className={combinedClassName}
            onClick={disabled ? undefined : onClick}
            aria-disabled={disabled}
        >
            {children}
        </button>
    );
}
