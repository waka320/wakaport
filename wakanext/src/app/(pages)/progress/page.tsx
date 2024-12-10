"use client";

import React from 'react';

const ProgressPage = () => (
    <div className="white-background p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">プロジェクト</h1>

        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-3">ポートフォリオサイト</h2>
                <p className="text-gray-600 mb-3">
                    Next.js, TypeScriptを使用した個人ポートフォリオサイト。レスポンシブデザインと使いやすさを重視しています。
                </p>
                <div className="flex space-x-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Next.js</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">TypeScript</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-3">その他のプロジェクト</h2>
                <p className="text-gray-600">現在準備中・開発中のプロジェクトがあります。</p>
            </div>
        </div>
    </div>
);

export default ProgressPage;
