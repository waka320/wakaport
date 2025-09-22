"use client";

import { useState, useEffect } from 'react';
import Form from '@/components/contact/Form';
import Link from 'next/link';
import { FaEnvelope, FaFacebook } from 'react-icons/fa';

const ContactPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // ページ読み込み時のアニメーション効果
        setIsLoading(false);
    }, []);

    return (
        <div className={`white-background relative crt-overlay min-h-screen py-6 md:py-8 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <div className="px-4 max-w-4xl mx-auto">
                <h1 className="text-center text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[var(--primary)]">お問い合わせ</h1>
                <div className='content-background pixel-panel mb-8 p-4 md:p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl'>
                    <h2 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 border-b pb-2 text-[var(--foreground)]">連絡先</h2>
                    <ul className="space-y-4 mb-6">
                        <li className="flex flex-col sm:flex-row sm:items-center">
                            <div className="flex items-center mb-1 sm:mb-0">
                                <FaEnvelope className="text-[var(--accent)] mr-3 text-lg md:text-xl" />
                                <span className="font-medium mr-2">Email:</span>
                            </div>
                            <Link
                                className='link text-[var(--link-color)] underline hover:text-[var(--link-hover-color)] hover:underline transition-colors break-all'
                                href="mailto:yuki@wakaport.com"
                            >
                                yuki@wakaport.com
                            </Link>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center">
                            <div className="flex items-center mb-1 sm:mb-0">
                                <FaFacebook className="text-[var(--accent)] mr-3 text-lg md:text-xl" />
                                <span className="font-medium mr-2">Facebook:</span>
                            </div>
                            <Link
                                className='link text-[var(--link-color)] underline hover:text-[var(--link-hover-color)] hover:underline transition-colors break-all'
                                href="https://www.facebook.com/ruo.song.yong.xi/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                www.facebook.com/ruo.song.yong.xi/
                            </Link>
                        </li>
                    </ul>

                    <h2 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 border-b pb-2 text-[var(--foreground)]">お問い合わせフォーム</h2>
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
