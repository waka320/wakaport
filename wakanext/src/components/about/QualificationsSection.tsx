import React from 'react';
import { qualifications } from '@/lib/about/qualifications';

const QualificationsSection = () => {
    return (
        <section className="content-background pixel-panel mb-4 p-4 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">{qualifications.title}</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2">
                {qualifications.items.map((item, index) => (
                    <li key={index} className="text-sm md:text-base">{item}</li>
                ))}
            </ul>
        </section>
    );
};

export default QualificationsSection;
