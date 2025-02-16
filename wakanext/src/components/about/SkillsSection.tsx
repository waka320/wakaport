import React, { useState } from 'react';
import { skills } from '@/lib/about/skills';
import Image from 'next/image';
import Link from 'next/link';

const SkillsSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    interface Skill {
        name: string;
        usage: string;
        comment: string;
    }

    const [selectedSkill, setSelectedSkill] = useState<Skill | undefined>(undefined);

    const handleSkillClick = (skill: { name: string; usage: string; comment: string }) => {
        setSelectedSkill(skill);
    };

    const closePopup = () => {
        setSelectedSkill(undefined);
    };

    return (
        <section className='content-background'>
            <h2
                className="text-2xl font-semibold mb-4 cursor-pointer flex items-center hover:text-[var(--accent)]"
                onClick={() => setIsOpen(!isOpen)}
            >
                {skills.title}
                <span className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </h2>
            <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <p className='text-xs text-gray-500 mb-2'>
                    Icons are from <Link href="https://icons8.com/" className="underline" target="_blank" rel="noopener noreferrer">Icons8</Link>
                </p>
                {skills.categories.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                        <div className="flex flex-wrap gap-4">
                            {category.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="cursor-pointer" onClick={() => handleSkillClick(item)}>
                                    <Image
                                        src={`/icons/${item.name.toLowerCase()}.png`} // アイコンのパスを適宜変更
                                        alt={item.name}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {selectedSkill && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">{selectedSkill.name}</h3>
                        <p className="text-sm text-gray-600">{selectedSkill.usage}</p>
                        <p className="text-sm">{selectedSkill.comment}</p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={closePopup}>
                            閉じる
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SkillsSection;
