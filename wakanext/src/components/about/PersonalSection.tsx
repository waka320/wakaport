import React, { useState, useRef, useEffect } from 'react';
import { personal } from '@/lib/about/personal';



// ワードクラウドアイテムの型定義
interface WordCloudItem {
    text: string;
    category: string;
    color: string;
    size: string;
    rotation: string;
    opacity: number;
    position: {
        top: string;
        left: string;
    };
}

// 表示カテゴリの型
type DisplayCategory = 'likes' | 'dislikes' | 'interests';

const PersonalSection = () => {
    const cloudRef = useRef<HTMLDivElement>(null);
    // 表示するカテゴリを選択するためのステート
    const [selectedCategory, setSelectedCategory] = useState<DisplayCategory>('likes');
    // ワードクラウドのアイテム
    const [wordCloudItems, setWordCloudItems] = useState<WordCloudItem[]>([]);

    // ランダムに色を生成する関数
    const getRandomColor = () => {
        const colors = [
            'text-blue-600', 'text-indigo-600', 'text-purple-600',
            'text-pink-600', 'text-red-600', 'text-orange-600',
            'text-amber-600', 'text-yellow-600', 'text-lime-600',
            'text-green-600', 'text-emerald-600', 'text-teal-600',
            'text-cyan-600', 'text-sky-600'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    // ランダムにフォントサイズを生成する関数
    const getRandomSize = () => {
        const sizes = [
            'text-sm', 'text-sm', 'text-base', 'text-base', 'text-base',
            'text-lg', 'text-lg', 'text-xl', 'text-xl', 'text-2xl'
        ];
        return sizes[Math.floor(Math.random() * sizes.length)];
    };

    // ランダムに回転を生成する関数
    const getRandomRotation = () => {
        const rotations = [
            'rotate-0', 'rotate-0', 'rotate-0', 'rotate-1', 'rotate-2', 'rotate-3',
            '-rotate-1', '-rotate-2', '-rotate-3'
        ];
        return rotations[Math.floor(Math.random() * rotations.length)];
    };

    // カテゴリに基づいた色を取得
    // const getCategoryColor = (category: string) => {
    //     const categoryColors: {[key: string]: string} = {
    //         "ゲーム": "bg-blue-100 text-blue-800 border-blue-200",
    //         "ニンゲン": "bg-green-100 text-green-800 border-green-200",
    //         "アニメ": "bg-purple-100 text-purple-800 border-purple-200",
    //         "その他": "bg-gray-100 text-gray-800 border-gray-200"
    //     };

    //     return categoryColors[category] || "bg-gray-100 text-gray-800 border-gray-200";
    // };

    // 選択されたカテゴリに基づいてワードクラウドアイテムを生成する関数
    const generateWordCloudItems = (category: DisplayCategory) => {
        let items: WordCloudItem[] = [];

        if (category === 'likes') {
            // スキのアイテム
            items = personal.likes.items.flatMap(cat =>
                cat.items.map(item => ({
                    text: item,
                    category: cat.category,
                    color: getRandomColor(),
                    size: getRandomSize(),
                    rotation: getRandomRotation(),
                    opacity: Math.random() * 0.5 + 0.5,
                    position: {
                        top: `${Math.random() * 70 + 15}%`,
                        left: `${Math.random() * 70 + 15}%`,
                    }
                }))
            );
        } else if (category === 'dislikes') {
            // キライのアイテム
            items = personal.dislikes.items.map(item => ({
                text: item,
                category: 'キライ',
                color: 'text-red-600',
                size: getRandomSize(),
                rotation: getRandomRotation(),
                opacity: Math.random() * 0.5 + 0.5,
                position: {
                    top: `${Math.random() * 70 + 15}%`,
                    left: `${Math.random() * 70 + 15}%`,
                }
            }));
        } else if (category === 'interests') {
            // 興味のアイテム
            items = personal.interests.items.map(item => ({
                text: item,
                category: '興味',
                color: 'text-blue-600',
                size: getRandomSize(),
                rotation: getRandomRotation(),
                opacity: Math.random() * 0.5 + 0.5,
                position: {
                    top: `${Math.random() * 70 + 15}%`,
                    left: `${Math.random() * 70 + 15}%`,
                }
            }));
        }

        return items;
    };

    // カテゴリが変更されたときにワードクラウドアイテムを更新
    useEffect(() => {
        setWordCloudItems(generateWordCloudItems(selectedCategory));
    }, [selectedCategory]);

    return (
        <section className="content-background pixel-panel mb-4 p-4 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">{personal.title}</h2>
            <div>
                <div className="mt-4 space-y-8">
                    {/* カテゴリ選択 */}
                    <div className="flex justify-center gap-4 mb-6">
                        <button
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === 'likes' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                            onClick={() => setSelectedCategory('likes')}
                        >
                            好きなもの
                        </button>
                        <button
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === 'dislikes' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                            onClick={() => setSelectedCategory('dislikes')}
                        >
                            苦手なもの
                        </button>
                        <button
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === 'interests' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                            onClick={() => setSelectedCategory('interests')}
                        >
                            興味・関心
                        </button>
                    </div>

                    {/* ワードクラウド - より自然な配置 */}
                    <div
                        ref={cloudRef}
                        className="relative h-[300px] md:h-[400px] bg-white/20 rounded-xl p-4 overflow-hidden border border-white/30"
                    >
                        {wordCloudItems.map((item, index) => (
                            <div
                                key={index}
                                className={`absolute cursor-pointer transition-all duration-300 hover:scale-125 ${item.color} ${item.size} ${item.rotation} font-medium rounded-lg px-3 py-1`}
                                style={{
                                    top: item.position.top,
                                    left: item.position.left,
                                    opacity: item.opacity,
                                    zIndex: item.size.includes('2xl') ? 10 :
                                        item.size.includes('xl') ? 9 :
                                            item.size.includes('lg') ? 8 : 5,
                                    textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                                }}
                                title={item.category}
                            >
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalSection;
