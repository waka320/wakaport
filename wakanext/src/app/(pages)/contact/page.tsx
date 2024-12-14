"use client";

import Form from '@/components/contact/Form';

const ContactPage = () => {



    return (
        <div className='white-background '>
            <div className="p-4 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">お問い合わせ</h1>

                <Form />
            </div>
        </div>
    );
};

export default ContactPage;
