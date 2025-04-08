"use client";

import React, { useState, useEffect } from 'react';
import { Timeline } from '@/components/progress/Timeline';
import { projects } from '@/lib/progress/projects';

const ProgressPage = () => {
    const [filter, setFilter] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // ページ読み込み時のアニメーション効果
        setIsLoading(false);
    }, []);

    const filteredProjects = filter
        ? projects.filter(project => project.tags.includes(filter))
        : projects;

    const handleFilterChange = (newFilter: string | null) => {
        setFilter(prevFilter => prevFilter === newFilter ? null : newFilter);
    };

    return (
        <div className={`white-background min-h-screen py-8 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <div className="p-4 max-w-5xl mx-auto">
                <h1 className="text-center text-3xl font-bold mb-4 text-[var(--primary)]">
                    経歴
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    自分の人生の出来事や成果をタイムラインで表示しています。タグをクリックして絞り込むことができます。
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <button
                        className={`px-4 py-2 rounded-full transition-all ${filter === '技術開発'
                                ? 'bg-[#e1f5fe] dark:bg-[#0277bd]/30 text-[#0277bd] dark:text-[#90caf9] font-medium shadow-md'
                                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
                            }`}
                        onClick={() => handleFilterChange('技術開発')}
                    >
                        技術開発
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full transition-all ${filter === '自分史'
                                ? 'bg-[#f3e5f5] dark:bg-[#7b1fa2]/30 text-[#7b1fa2] dark:text-[#ce93d8] font-medium shadow-md'
                                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
                            }`}
                        onClick={() => handleFilterChange('自分史')}
                    >
                        自分史
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full transition-all ${filter === '学校'
                                ? 'bg-[#e8f5e9] dark:bg-[#2e7d32]/30 text-[#2e7d32] dark:text-[#a5d6a7] font-medium shadow-md'
                                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
                            }`}
                        onClick={() => handleFilterChange('学校')}
                    >
                        学校
                    </button>
                    {filter && (
                        <button
                            className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-all text-gray-800 dark:text-gray-200"
                            onClick={() => setFilter(null)}
                        >
                            すべて表示
                        </button>
                    )}
                </div>

                <div className="mb-8 md:p-6 rounded-lg transition-all duration-300">
                    <Timeline projects={filteredProjects} />
                </div>

                <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
                    表示されているイベント数: {filteredProjects.length} / {projects.length}
                </div>
            </div>
        </div>
    );
};

export default ProgressPage;
