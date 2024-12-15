"use client";

import React from 'react';
import { Timeline } from '@/components/progress/Timeline';

const projects = [
    {
        title: 'ポートフォリオサイト',
        description: 'Next.js, TypeScriptを使用した個人ポートフォリオサイト。レスポンシブデザインと使いやすさを重視。',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        date: '2025年1月'
    },
    {
        title: '歩行者逆引きボード',
        description: '情報学部での機械学習プロジェクト。画像認識アルゴリズムの開発に従事。',
        technologies: ['Python', 'TensorFlow', 'Jupyter'],
        date: '2024年11月'
    }
];

const ProgressPage = () => (
    <div className='white-background '>
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                開発経歴
            </h1>
            <Timeline projects={projects} />

        </div>
    </div>
);

export default ProgressPage;
