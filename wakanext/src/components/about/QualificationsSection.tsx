import React from 'react';
import { qualifications } from '@/lib/about/qualifications';

interface QualificationsSectionProps {
    isOpen: boolean;
    onToggle: () => void;
}

const QualificationsSection = ({ isOpen, onToggle }: QualificationsSectionProps) => {
    return (
        <section className="content-background mb-8 p-5 md:p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2
                className={`text-xl md:text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-between hover:text-[var(--accent)] transition-colors duration-300 ${isOpen ? 'text-[var(--accent)]' : ''}`}
                onClick={onToggle}
            >
                <span>{qualifications.title}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </h2>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    {qualifications.items.map((item, index) => (
                        <li key={index} className="text-base md:text-lg">{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default QualificationsSection;
