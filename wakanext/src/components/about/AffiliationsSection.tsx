import React from 'react';
import Link from 'next/link';
import { affiliations } from '@/lib/about/affiliations';

interface AffiliationsSectionProps {
    isOpen: boolean;
    onToggle: () => void;
}

const AffiliationsSection = ({ isOpen, onToggle }: AffiliationsSectionProps) => {
    return (
        <section className="content-background mb-8 p-5 md:p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2
                className={`text-xl md:text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-between hover:text-[var(--accent)] transition-colors duration-300 ${isOpen ? 'text-[var(--accent)]' : ''}`}
                onClick={onToggle}
            >
                <span>{affiliations.title}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </h2>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <ul className="list-disc pl-5 space-y-3 mt-4">
                    {affiliations.items.map((item, index) =>
                        typeof item === 'string' ? (
                            <li key={index} className="text-base md:text-lg">{item}</li>
                        ) : (
                            <li key={index} className="text-base md:text-lg">
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
