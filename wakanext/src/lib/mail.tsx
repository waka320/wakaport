import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


export async function sendContactEmail(data: {
    name: string;
    email: string;
    message: string;
}) {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECIPIENT,
            subject: `Wakaportからお問い合わせ: ${data.name}様から`,
            html: `
        <h2>お問い合わせ</h1>
        <p><strong>名前:</strong> ${data.name}</p>
        <p><strong>メールアドレス:</strong> ${data.email}</p>
        <p><strong>本文:</strong></p>
        <p>${data.message}</p>
      `,
            replyTo: data.email
        });

        return true;
    } catch (error) {
        console.error('メール送信エラー:', error);
        return false;
    }
}
