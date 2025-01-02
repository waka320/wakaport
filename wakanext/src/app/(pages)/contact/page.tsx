"use client";

import Form from '@/components/contact/Form';
import Link from 'next/link';

const ContactPage = () => {
    return (
        <div className='white-background'>
            <div className="p-4 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-[var(--foreground)]">お問い合わせ</h1>
                <div className='content-background p-6 rounded-lg shadow-lg'>
                    <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">連絡先</h2>
                    <ul>
                        <li>mail: <Link className='link text-[var(--link-color)] hover:text-[var(--link-hover-color)] hover:underline' href="mailto:yukiwakmatsu6a@gmail.com">yukiwakmatsu6a@gmail.com</Link></li>
                        <li>Facebook: <Link className='link text-[var(--link-color)] hover:text-[var(--link-hover-color)] hover:underline' href="https://www.facebook.com/ruo.song.yong.xi/">www.facebook.com/ruo.song.yong.xi/</Link></li>
                    </ul>
                </div>
                <Form />
            </div>
        </div>
    );
};

export default ContactPage;
