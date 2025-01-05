import React, { useState } from 'react';
import { skills } from '@/lib/about/skills';

const SkillsSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='content-background'>
            <h2 className="text-2xl font-semibold mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {skills.title}
            </h2>
            {isOpen && skills.categories.map((category, index) => (
                <div key={index}>
                    <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default SkillsSection;
