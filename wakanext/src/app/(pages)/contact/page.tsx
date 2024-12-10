"use client";

import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 送信処理を追加
        console.log(formData);
    };

    return (
        <div className='white-background '>
            <div className="p-4 max-w-md mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">コンタクト</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-2 font-semibold">名前</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">メールアドレス</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded-md"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">メッセージ</label>
                        <textarea
                            className="w-full px-3 py-2 border rounded-md"
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        送信
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
