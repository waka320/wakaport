"use client";

import { submitContactForm } from '@/actions/contactActions';
import { useState, FormEvent } from 'react';
import { Button } from '../ui/Button';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [result, setResult] = useState<{ success?: boolean; error?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult({});  // 送信時に前回の結果をクリア

        // フォームデータのデバッグログ
        console.log('Submitting form data:', formData);

        try {
            // FormDataオブジェクトの作成
            const formDataObj = new FormData();
            formDataObj.append('name', formData.name);
            formDataObj.append('email', formData.email);
            formDataObj.append('message', formData.message);

            console.log('Form submission started');

            // Server Actionの呼び出し
            const response = await submitContactForm(formDataObj);
            console.log('Form submission response:', response);

            setResult(response || { success: true });

            if (response?.success !== false) {
                // フォームをリセット
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setResult({
                success: false,
                error: error instanceof Error
                    ? error.message
                    : '送信中にエラーが発生しました。後でもう一度お試しください。'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-white/30 rounded-lg p-4 md:p-6 shadow-inner">
            {result.success ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded shadow-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 text-green-500">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-green-700 font-medium">送信が完了しました。お問い合わせありがとうございます。</p>
                        </div>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-1">お名前</label>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full p-2 md:p-3 pl-3 md:pl-4 border border-gray-300 rounded-md bg-white/80 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-200 shadow-sm text-sm md:text-base"
                                placeholder="山田 太郎"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-1">メールアドレス</label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full p-2 md:p-3 pl-3 md:pl-4 border border-gray-300 rounded-md bg-white/80 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-200 shadow-sm text-sm md:text-base"
                                placeholder="example@email.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-1">メッセージ</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full p-2 md:p-3 border border-gray-300 rounded-md bg-white/80 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-200 resize-y shadow-sm text-sm md:text-base"
                            placeholder="お問い合わせ内容をご記入ください"
                        ></textarea>
                    </div>

                    {result.error && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-3 md:p-4 rounded shadow-sm">
                            <div className="flex">
                                <div className="flex-shrink-0 text-red-500">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-red-700 font-medium">エラー: {result.error}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="pt-2">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto px-6 py-3 bg-[var(--accent)] text-white rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            {isSubmitting ? (
                                <>
                                    <FaSpinner className="animate-spin" />
                                    <span>送信中...</span>
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane />
                                    <span>送信する</span>
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
}
