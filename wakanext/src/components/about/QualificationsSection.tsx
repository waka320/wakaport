import React, { useState } from 'react';
import { qualifications } from '@/lib/about/qualifications';

const QualificationsSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="content-background mb-8">
            <h2 className="text-2xl font-semibold mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {qualifications.title}
            </h2>
            {isOpen && (
                <ul className="list-disc pl-5 space-y-2">
                    {qualifications.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default QualificationsSection;
