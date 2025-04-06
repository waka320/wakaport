import React from 'react';
import { introduction } from '@/lib/about/introduction';
import Image from "next/image";

interface IntroductionSectionProps {
    isOpen: boolean;
    onToggle: () => void;
}

const IntroductionSection = ({ isOpen, onToggle }: IntroductionSectionProps) => {
    return (
        <section className="content-background mb-8 p-5 md:p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2
                className={`text-xl md:text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-between hover:text-[var(--accent)] transition-colors duration-300 ${isOpen ? 'text-[var(--accent)]' : ''}`}
                onClick={onToggle}
            >
                <span>{introduction.title}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </h2>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className='flex flex-col md:flex-row container mt-4 gap-6'>
                    <div className='flex-none md:flex-[1] flex justify-center'>
                        <div className="relative overflow-hidden ">
                            <Image
                                src={introduction.imageSrc}
                                alt="プロフィール画像"
                                width={180}
                                height={180}
                                className="w-36 md:w-44 transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>
                    <div className='flex-auto md:flex-[2] flex flex-col justify-between'>
                        <div>
                            {introduction.content.map((para, index) => (
                                <div key={index}>
                                    <p className="text-base md:text-lg leading-relaxed mb-3">{para}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-right mt-4 text-sm md:text-base text-[var(--secondary)]">
                            {introduction.lastEdit}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
