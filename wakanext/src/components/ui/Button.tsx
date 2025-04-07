import React from 'react';

export interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
    disabled?: boolean; // disabled プロパティを追加
}

export const Button = ({
    children,
    type = 'button',
    className = '',
    onClick,
    disabled = false // デフォルト値も設定
}: ButtonProps) => {
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
