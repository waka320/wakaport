import React, { useState } from 'react';
import { introduction } from '@/lib/about/introduction';

const IntroductionSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="content-background mb-8">
            <h2 className="text-2xl font-semibold mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {introduction.title}
            </h2>
            {isOpen && (
                <p className="text-[var(--foreground)]">{introduction.content}</p>
            )}
        </section>
    );
};

export default IntroductionSection;
