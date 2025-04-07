"use client";

import Form from '@/components/contact/Form';
import Link from 'next/link';
import { FaEnvelope, FaFacebook } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div className='white-background min-h-screen py-8'>
            <div className="p-4 max-w-4xl mx-auto">
                <h1 className="text-center text-3xl font-bold mb-8 text-[var(--primary)]">お問い合わせ</h1>
                <div className='content-background mb-8 p-5 md:p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl'>
                    <h2 className="text-xl md:text-2xl font-semibold mb-6 border-b pb-2 text-[var(--foreground)]">連絡先</h2>
                    <ul className="space-y-4 mb-6">
                        <li className="flex items-center">
                            <FaEnvelope className="text-[var(--accent)] mr-3 text-xl" />
                            <span className="font-medium mr-2">Email:</span>
                            <Link
                                className='link text-[var(--link-color)] hover:text-[var(--link-hover-color)] hover:underline transition-colors'
                                href="mailto:yukiwakmatsu6a@gmail.com"
                            >
                                yukiwakmatsu6a@gmail.com
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <FaFacebook className="text-[var(--accent)] mr-3 text-xl" />
                            <span className="font-medium mr-2">Facebook:</span>
                            <Link
                                className='link text-[var(--link-color)] hover:text-[var(--link-hover-color)] hover:underline transition-colors'
                                href="https://www.facebook.com/ruo.song.yong.xi/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                www.facebook.com/ruo.song.yong.xi/
                            </Link>
                        </li>
                    </ul>

                    <h2 className="text-xl md:text-2xl font-semibold mb-6 border-b pb-2 text-[var(--foreground)]">お問い合わせフォーム</h2>
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
