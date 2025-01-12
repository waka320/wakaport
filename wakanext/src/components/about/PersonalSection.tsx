import React, { useState } from 'react';
import { personal } from '@/lib/about/personal';

const PersonalSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="content-background mb-8">
            <h2
                className="text-2xl font-semibold mb-4 cursor-pointer flex items-center hover:text-[var(--accent)]"
                onClick={() => setIsOpen(!isOpen)}
            >
                {personal.title}
                <span className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </h2>
            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <div>
                    <h3 className="text-xl font-semibold mb-4">{personal.likes.title}</h3>
                    {personal.likes.items.map((like, index) => (
                        <div key={index}>
                            <h4>{like.category}</h4>
                            <p>{like.items.join('、')}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="text-xl font-semibold mt-2 mb-4">{personal.dislikes.title}</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        {personal.dislikes.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mt-2 mb-4">{personal.interests.title}</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        {personal.interests.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PersonalSection;
