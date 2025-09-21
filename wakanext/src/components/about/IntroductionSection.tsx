import React from 'react';
import { introduction } from '@/lib/about/introduction';
import Image from "next/image";

const IntroductionSection = () => {
    return (
        <section className="content-background mb-4 p-4 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">{introduction.title}</h2>
            <div className='flex flex-col md:flex-row container mt-4 gap-6'>
                <div className='flex-none md:flex-[1] flex justify-center'>
                    <div className="relative overflow-hidden ">
                        <Image
                            src={introduction.imageSrc}
                            alt="プロフィール画像"
                            width={180}
                            height={180}
                            className="w-36 md:w-44 transition-transform duration-300 "
                        />
                    </div>
                </div>
                <div className='flex-auto md:flex-[2] flex flex-col justify-between'>
                    <div>
                        {introduction.content.map((para, index) => (
                            <div key={index}>
                                <p className="text-sm md:text-base leading-relaxed mb-2">{para}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-right mt-2 text-xs md:text-sm text-[var(--secondary)]">
                        {introduction.lastEdit}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
