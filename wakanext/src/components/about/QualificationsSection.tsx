import React from 'react';
import { qualifications } from '@/lib/about/qualifications';

const QualificationsSection = () => (
    <section className="content-background mb-8">
        <h2 className="text-2xl font-semibold mb-4">{qualifications.title}</h2>
        <ul className="list-disc pl-5 space-y-2">
            {qualifications.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </section>
);

export default QualificationsSection;
