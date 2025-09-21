import React from 'react';
import Link from 'next/link';
import { Button as ShadButton } from '@/components/shad/ui/button';
import { cn } from '@/lib/utils';

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

    if (href) {
        const linkProps = external ? {
            target: "_blank",
            rel: "noopener noreferrer"
        } as const : {};

        return (
            <ShadButton asChild className={cn('group', className)}>
                <Link href={href} {...linkProps}>
                    {children}
                    {arrow}
                </Link>
            </ShadButton>
        );
    }

    return (
        <ShadButton
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn('group', className)}
        >
            {children}
            {arrow}
        </ShadButton>
    );
};
