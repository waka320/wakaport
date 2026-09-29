import React from 'react';
import Link from 'next/link';
import { affiliations } from '@/lib/about/affiliations';

const AffiliationsSection = () => {
    return (
        <section className="content-background pixel-panel mb-4 p-4 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">{affiliations.title}</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2">
                {affiliations.items.map((item, index) =>
                    typeof item === 'string' ? (
                        <li key={index} className="text-sm md:text-base">{item}</li>
                    ) : (
                        <li key={index} className="text-sm md:text-base">
                            <Link className='text-[var(--link-color)] hover:text-[var(--accent)] underline' href={item.url}>{item.name}</Link>
                            <span> {item.description}</span>
                        </li>
                    )
                )}
            </ul>
        </section>
    );
};

export default AffiliationsSection;
