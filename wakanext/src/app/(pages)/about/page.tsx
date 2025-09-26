"use client";

import { useState, useEffect } from 'react';
import AffiliationsSection from '@/components/about/AffiliationsSection';
import QualificationsSection from '@/components/about/QualificationsSection';
import GamesSection from '@/components/about/GamesSection';
import { projects } from '@/lib/progress/projects';

const AboutPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // ページ読み込み時のアニメーション効果
        setIsLoading(false);
    }, []);



    return (
        <div className={`white-background relative crt-overlay min-h-screen py-8 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <div className="p-4 max-w-4xl mx-auto">
                <h1 className="text-center text-3xl font-bold mb-8 text-[var(--primary)]">
                    WakamatsuYukiについて
                </h1>
                <div className="space-y-4">
                    {/* Introduction removed */}
                    <AffiliationsSection />
                    {/* Skills removed */}
                    <QualificationsSection />

                    <section className="content-background pixel-panel mb-4 p-4 rounded-lg">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">経歴</h2>
                        <ul className="space-y-2">
                            {projects.map((p, i) => (
                                <li key={i} className="text-sm md:text-base">
                                    <span className="text-muted-foreground mr-2 text-xs">{p.start}{p.end && ` ~ ${p.end}`}</span>
                                    {p.link ? (
                                        <a
                                            href={p.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[var(--link-color)] hover:text-[var(--link-hover-color)] underline transition-colors"
                                        >
                                            {p.title}
                                        </a>
                                    ) : (
                                        p.title
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>
                    <GamesSection sheetId="1ZoL1TgPKWzHJVq3osj6Nyttm_XqNPeR0jeNR9lYYr_w" />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
