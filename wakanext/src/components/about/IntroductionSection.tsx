import React, { useState } from 'react';
import { introduction } from '@/lib/about/introduction';
import Image from "next/image";

const IntroductionSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="content-background mb-8 p-4 md:p-6 rounded-lg shadow-lg">
            <h2
                className="text-xl md:text-2xl font-semibold mb-4 cursor-pointer flex items-center hover:text-[var(--accent)] transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                {introduction.title}
                <span className={`ml-2 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </h2>
            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <div className='flex flex-col md:flex-row container mt-4 gap-4'>
                    <div className='flex-none md:flex-[1] flex justify-center'>
                        <Image
                            src={introduction.imageSrc}
                            alt="プロフィール画像"
                            width={150}
                            height={150}
                            className="w-32 md:w-full"
                        />
                    </div>
                    <div className='flex-auto md:flex-[2] flex flex-col justify-between'>
                        <div>
                            {introduction.content.map((para, index) => (
                                <div key={index}>
                                    <p className="text-base md:text-lg leading-relaxed mb-2">{para}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-right mt-4 text-sm md:text-base">
                            {introduction.lastEdit}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
