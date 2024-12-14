"use client";

import Form from '@/components/contact/Form';
import Link from 'next/link';

const ContactPage = () => {



    return (
        <div className='white-background '>
            <div className="p-4 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">お問い合わせ</h1>
                <div className='content-background'>
                    <h2 className="text-2xl font-semibold mb-4">連絡先</h2>
                    <ul>
                        <li>mail: <Link className='text-blue-500 hover:underline' href="mailto:yukiwakmatsu6a@gmail.com">yukiwakmatsu6a@gmail.com</Link></li>
                        <li>Facebook: <Link className='text-blue-500 hover:underline' href="https://www.facebook.com/ruo.song.yong.xi/">www.facebook.com/ruo.song.yong.xi/</Link></li>
                    </ul>

                </div>
                <Form />
            </div>
        </div>
    );
};

export default ContactPage;
