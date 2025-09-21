"use client";

import { useState, useEffect } from 'react';
import IntroductionSection from '@/components/about/IntroductionSection';
import AffiliationsSection from '@/components/about/AffiliationsSection';
import SkillsSection from '@/components/about/SkillsSection';
import QualificationsSection from '@/components/about/QualificationsSection';
import PersonalSection from '@/components/about/PersonalSection';
import { projects } from '@/lib/progress/projects';

const AboutPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // ページ読み込み時のアニメーション効果
        setIsLoading(false);
    }, []);



    return (
        <div className={`white-background min-h-screen py-8 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <div className="p-4 max-w-4xl mx-auto">
                <h1 className="text-center text-3xl font-bold mb-8 text-[var(--primary)]">
                    自己紹介
                </h1>
                <div className="space-y-4">
                    <IntroductionSection />
                    <AffiliationsSection />
                    <SkillsSection />
                    <QualificationsSection />
                    <PersonalSection />
                    <section className="content-background mb-4 p-4 rounded-lg">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">経歴（タイトルのみ）</h2>
                        <ul className="space-y-2">
                            {projects.map((p, i) => (
                                <li key={i} className="text-sm md:text-base">
                                    <span className="text-muted-foreground mr-2 text-xs">{p.start}{p.end && ` ~ ${p.end}`}</span>
                                    {p.title}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
