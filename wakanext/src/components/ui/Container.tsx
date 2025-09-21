import React from 'react';
import { cn } from '@/lib/utils';

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                'bg-background text-foreground max-w-[800px] w-[90%] mx-auto my-8 p-8 rounded-lg shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_15px_20px_-5px_rgba(0,0,0,0.15)]',
                className,
            )}
            {...props}
        />
    );
}

