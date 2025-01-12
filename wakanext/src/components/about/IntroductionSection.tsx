import React, { useState } from 'react';
import { introduction } from '@/lib/about/introduction';

const IntroductionSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="content-background mb-8">
            <h2
                className="text-2xl font-semibold mb-4 cursor-pointer flex items-center hover:text-[var(--accent)]"
                onClick={() => setIsOpen(!isOpen)}
            >
                {introduction.title}
                <span className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </h2>
            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <p className="text-[var(--foreground)]">{introduction.content}</p>
            </div>
        </section>
    );
};

export default IntroductionSection;
