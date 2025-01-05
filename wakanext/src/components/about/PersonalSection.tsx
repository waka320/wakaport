import React from 'react';
import { personal } from '@/lib/about/personal';

const PersonalSection = () => (
    <section className="content-background mb-8">
        <h2 className="text-2xl font-semibold mb-4">{personal.title}</h2>
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
    </section>
);

export default PersonalSection;
