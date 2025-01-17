import React, { useState } from 'react';
import Link from 'next/link';
import { affiliations } from '@/lib/about/affiliations';

const AffiliationsSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="content-background mb-8">
            <h2
                className="text-2xl font-semibold mb-4 cursor-pointer flex items-center hover:text-[var(--accent)]"
                onClick={() => setIsOpen(!isOpen)}
            >
                {affiliations.title}
                <span className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </h2>
            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <ul className="list-disc pl-5 space-y-2">
                    {affiliations.items.map((item, index) =>
                        typeof item === 'string' ? (
                            <li key={index}>{item}</li>
                        ) : (
                            <li key={index}>
                                <Link className='text-[var(--link-color)] hover:text-[var(--accent)] underline' href={item.url}>{item.name}</Link>
                                <span> {item.description}</span>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </section>
    );
};

export default AffiliationsSection;
