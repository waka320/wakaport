"use client";

import { useState, useEffect } from 'react';
import IntroductionSection from '@/components/about/IntroductionSection';
import AffiliationsSection from '@/components/about/AffiliationsSection';
import SkillsSection from '@/components/about/SkillsSection';
import QualificationsSection from '@/components/about/QualificationsSection';
import PersonalSection from '@/components/about/PersonalSection';

const AboutPage = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // ページ読み込み時のアニメーション効果
        setIsLoading(false);
    }, []);

    const handleSectionToggle = (sectionId: string) => {
        setExpandedSection(expandedSection === sectionId ? null : sectionId);
    };

    return (
        <div className={`white-background min-h-screen py-8 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <div className="p-4 max-w-4xl mx-auto">
                <h1 className="text-center text-3xl font-bold mb-8 text-[var(--primary)]">
                    自己紹介
                </h1>
                <div className="text-center text-xl font-medium mb-6 text-[var(--secondary)] animate-pulse">
                    \\ Click to Open //
                </div>
                <div className="space-y-6">
                    <IntroductionSection
                        isOpen={expandedSection === 'intro'}
                        onToggle={() => handleSectionToggle('intro')}
                    />
                    <AffiliationsSection
                        isOpen={expandedSection === 'affiliations'}
                        onToggle={() => handleSectionToggle('affiliations')}
                    />
                    <SkillsSection
                        isOpen={expandedSection === 'skills'}
                        onToggle={() => handleSectionToggle('skills')}
                    />
                    <QualificationsSection
                        isOpen={expandedSection === 'qualifications'}
                        onToggle={() => handleSectionToggle('qualifications')}
                    />
                    <PersonalSection
                        isOpen={expandedSection === 'personal'}
                        onToggle={() => handleSectionToggle('personal')}
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
