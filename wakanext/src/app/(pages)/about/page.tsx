"use client";

import React from 'react';
import IntroductionSection from '@/components/about/IntroductionSection';
import AffiliationsSection from '@/components/about/AffiliationsSection';
import SkillsSection from '@/components/about/SkillsSection';
import QualificationsSection from '@/components/about/QualificationsSection';
import PersonalSection from '@/components/about/PersonalSection';

const AboutPage = () => (
    <div className='white-background'>
        <div className="p-4 max-w-4xl mx-auto">
            <IntroductionSection />
            <AffiliationsSection />
            <SkillsSection />
            <QualificationsSection />
            <PersonalSection />
        </div>
    </div>
);

export default AboutPage;
