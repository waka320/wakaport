'use client'
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // html要素にクラスを追加
    document.documentElement.className = `${theme}-theme`;

    // グリッド背景を含む要素にもクラスを追加
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
