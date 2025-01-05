import React from 'react';
import { introduction } from '@/lib/about/introduction';

const IntroductionSection = () => (
    <section className="content-background mb-8">
        <h2 className="text-2xl font-semibold mb-4">{introduction.title}</h2>
        <p className="text-[var(--foreground)]">{introduction.content}</p>
    </section>
);

export default IntroductionSection;
