import React, { useState } from 'react';
import { skills } from '@/lib/about/skills';

const SkillsSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='content-background'>
            <h2
                className="text-2xl font-semibold mb-4 cursor-pointer flex items-center hover:text-[var(--accent)]"
                onClick={() => setIsOpen(!isOpen)}
            >
                {skills.title}
                <span className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </h2>
            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                {skills.categories.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
