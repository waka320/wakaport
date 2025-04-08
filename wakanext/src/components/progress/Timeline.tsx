"use client"; // クライアントコンポーネントとして明示的に宣言

import '@/styles/timeline.scss';
import { ProjectProps } from '@/lib/progress/projects';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

// タグの色を定義（ライトモードとダークモード両方）
const TAG_COLORS: Record<string, {
    bg: string,
    text: string,
    darkBg: string,
    darkText: string
}> = {
    '技術開発': {
        bg: '#e1f5fe',
        text: '#0277bd',
        darkBg: 'rgba(2, 119, 189, 0.3)',
        darkText: '#90caf9'
    },
    '自分史': {
        bg: '#f3e5f5',
        text: '#7b1fa2',
        darkBg: 'rgba(123, 31, 162, 0.3)',
        darkText: '#ce93d8'
    },
    '学校': {
        bg: '#e8f5e9',
        text: '#2e7d32',
        darkBg: 'rgba(46, 125, 50, 0.3)',
        darkText: '#a5d6a7'
    },
};

export function Timeline({ projects }: { projects: ProjectProps[] }) {
    const timelineRef = useRef<HTMLDivElement>(null);
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // マウント後のみクライアントサイドの処理を実行
    useEffect(() => {
        setMounted(true);
    }, []);

    // 現在のテーマ状態を決定
    const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        const items = timelineRef.current?.querySelectorAll('.timeline-item');
        items?.forEach(item => observer.observe(item));

        return () => {
            items?.forEach(item => observer.unobserve(item));
        };
    }, [projects]);

    return (
        <div className="timeline dark:text-gray-200" ref={timelineRef}>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="timeline-item"
                    data-index={index}
                >
                    <div className="timeline-dot">
                        <div className="timeline-dot-inner dark:bg-orange-500"></div>
                    </div>

                    <div className="timeline-content dark:bg-gray-800/90 dark:border-gray-700">
                        <div className="timeline-header">
                            <h2 className="timeline-title dark:text-white">
                                {project.title}
                            </h2>
                            <span className="timeline-date dark:text-gray-300">
                                {project.start}{project.end && ` ~ ${project.end}`}
                            </span>
                        </div>

                        <p className="timeline-description dark:text-gray-300">
                            {project.description}
                        </p>

                        <div className="timeline-tags">
                            {project.tags.map((tag, tagIndex) => {
                                const tagColor = TAG_COLORS[tag] || {
                                    bg: '#f0f0f0', text: '#333',
                                    darkBg: '#374151', darkText: '#d1d5db'
                                };

                                // mountedがfalseの場合はデフォルトのスタイルを使用
                                return (
                                    <span
                                        key={tagIndex}
                                        className="timeline-tag"
                                        style={mounted ? {
                                            backgroundColor: isDark ? tagColor.darkBg : tagColor.bg,
                                            color: isDark ? tagColor.darkText : tagColor.text
                                        } : {}}
                                    >
                                        {tag}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
