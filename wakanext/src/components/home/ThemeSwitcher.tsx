'use client'
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);

    document.documentElement.className = `${theme}-theme`;

    const gridBackground = document.querySelector('.grid-background');
    if (gridBackground) {
      gridBackground.className = `grid-background ${theme}-theme`;
    }
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      テーマ切り替え
    </button>
  );
}
