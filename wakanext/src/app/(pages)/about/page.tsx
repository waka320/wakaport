
"use client";

import React from 'react';

const AboutPage = () => (
    <div className='white-background'>
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">自己紹介</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">基本情報</h2>
                <p className="text-gray-600">
                    名古屋大学情報学部人間社会情報科学科の学生です。Webエンジニアを目指し、Next.jsやTypeScriptを中心に学んでいます。
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">経歴</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>名古屋大学 情報学部 人間社会情報科学科 在学中</li>
                    <li>Webエンジニアとしてフロントエンド開発を学習中</li>
                    <li>個人プロジェクトを通じて実践的なスキルを磨いています</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">技術スタック</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>言語: TypeScript, JavaScript, Python</li>
                    <li>フロントエンド: React, Next.js, TailwindCSS</li>
                    <li>ツール: Git, VSCode, Docker</li>
                </ul>
            </section>
        </div>
    </div>
);

export default AboutPage;
