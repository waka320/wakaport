"use client";

import { submitContactForm } from '@/actions/contactActions';
import { useState, FormEvent } from 'react';
import { Button } from '../ui/Button';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [result, setResult] = useState<{ success?: boolean; error?: string }>({});

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formDataObj = new FormData();
        formDataObj.append('name', formData.name);
        formDataObj.append('email', formData.email);
        formDataObj.append('message', formData.message);

        console.log('送信データ:', formData);
        const response = await submitContactForm(formDataObj);

        console.log('サーバーレスポンス:', response);

        setResult(response);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 content-background p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">お問い合わせフォーム</h2>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">名前</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[var(--background)] text-[var(--foreground)] focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">メールアドレス</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[var(--background)] text-[var(--foreground)] focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)]">メッセージ</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[var(--background)] text-[var(--foreground)] focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
            </div>
            <div>
                <Button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">送信</Button>
            </div>
            {result.success && <p className="text-green-500">送信が成功しました。</p>}
            {result.error && <p className="text-red-500">送信に失敗しました: {result.error}</p>}
        </form>
    );
}
