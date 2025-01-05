import React from 'react';
import Link from 'next/link';
import { affiliations } from '@/lib/about/affiliations';

const AffiliationsSection = () => (
    <section className="content-background mb-8">
        <h2 className="text-2xl font-semibold mb-4">{affiliations.title}</h2>
        <ul className="list-disc pl-5 space-y-2">
            {affiliations.items.map((item, index) =>
                typeof item === 'string' ? (
                    <li key={index}>{item}</li>
                ) : (
                    <li key={index}>
                        <Link className='text-[var(--link-color)] hover:text-[var(--link-hover-color)] hover:underline' href={item.url}>{item.name}</Link>
                        <span> {item.description}</span>
                    </li>
                )
            )}
        </ul>
    </section>
);

export default AffiliationsSection;
