import React from 'react';
import Link from 'next/link';
import { Button as ShadButton, buttonVariants } from '@/components/shad/ui/button';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type ShadVariant = VariantProps<typeof buttonVariants>["variant"];

export interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    href?: string;
    withArrow?: boolean;
    external?: boolean;
    variant?: ShadVariant;
}

export const Button = ({
    children,
    type = 'button',
    className = '',
    onClick,
    disabled = false,
    href,
    withArrow = false,
    external = false,
    variant = 'default'
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
            <ShadButton asChild variant={variant} className={cn('group', className)}>
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
            variant={variant}
            className={cn('group', className)}
        >
            {children}
            {arrow}
        </ShadButton>
    );
};
