import React, { useState } from 'react';
import { introduction } from '@/lib/about/introduction';
import Image from "next/image";

const IntroductionSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="content-background mb-8 p-6 rounded-lg shadow-lg">
            <h2
                className="text-2xl font-semibold mb-4 cursor-pointer flex items-center hover:text-[var(--accent)] transition-colors duration-300"
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
                <div className='flex container mt-4'>
                    <div className='flex-[1]'>
                        <Image
                            src={introduction.imageSrc}
                            alt="プロフィール画像"
                            width={150}
                            height={150}
                            className="w-full"
                        />
                    </div>
                    <div className='flex-[2] ml-4 flex flex-col justify-between'>
                        <div>
                            {introduction.content.map((para, index) => (
                                <div key={index}>
                                    <p className="text-lg leading-relaxed mb-2">{para}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-right mt-4">
                            {introduction.lastEdit}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
