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


    return (
        <form onSubmit={handleSubmit} className="content-background space-y-4">
            <h2 className="text-2xl font-semibold mb-4">お問合せフォーム</h2>
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

            {result.error && <p className="text-red-500">{result.error}</p>}
            {result.success && <p className="text-green-500">送信完了</p>}


            <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
                送信
            </Button>
        </form>
    );
}
