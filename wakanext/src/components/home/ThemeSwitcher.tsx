"use client"
import { useState, useEffect } from 'react';

export function ThemeSwitcher() {
    const [theme, setTheme] = useState('light');
    const [font, setFont] = useState('sans-serif');

    useEffect(() => {
        document.documentElement.className = `${theme}-theme ${font}-font`;
    }, []);

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.className = `${newTheme}-theme ${font}-font`;
        localStorage.setItem('theme', newTheme);
    };

    const changeFont = () => {
        const newFont = font === 'sans-serif' ? 'serif' : 'sans-serif';
        setFont(newFont);
        document.documentElement.className = `${theme}-theme ${newFont}-font`;
        localStorage.setItem('font', newFont);
    };

    return (
        <div className="theme-switcher">
            <button onClick={changeTheme}>
                テーマ切り替え ({theme})
            </button>
            <button onClick={changeFont}>
                フォント切り替え ({font})
            </button>
        </div>
    );
}
