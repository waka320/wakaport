"use server";

import { sendContactEmail } from '@/lib/mail';

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const errors: Record<string, string> = {};

    if (!name || name.trim().length < 2) {
        errors.name = '名前は2文字以上で入力してください';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = '正しいメールアドレスを入力してください';
    }

    if (!message || message.trim().length < 10) {
        errors.message = 'メッセージは10文字以上で入力してください';
    }

    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            errors
        };
    }

    try {
        const emailSent = await sendContactEmail({ name, email, message });

        if (!emailSent) {
            throw new Error('メール送信に失敗しました');
        }

        return {
            success: true,
            message: '送信が完了しました'
        };
    } catch (error) {
        return {
            success: false,
            error: '送信中にエラーが発生しました'
        };
    }
}
