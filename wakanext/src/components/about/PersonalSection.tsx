import React, { useState, useRef } from 'react';
import { personal } from '@/lib/about/personal';

interface PersonalSectionProps {
    isOpen: boolean;
    onToggle: () => void;
}

const PersonalSection = ({ isOpen, onToggle }: PersonalSectionProps) => {
    const cloudRef = useRef<HTMLDivElement>(null);
    
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

    // ランダムにフォントサイズを生成する関数（頻度に基づいた重み付け）
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
    const getCategoryColor = (category: string) => {
        const categoryColors: {[key: string]: string} = {
            "ゲーム": "bg-blue-100 text-blue-800 border-blue-200",
            "ニンゲン": "bg-green-100 text-green-800 border-green-200",
            "アニメ": "bg-purple-100 text-purple-800 border-purple-200",
            "その他": "bg-gray-100 text-gray-800 border-gray-200"
        };
        
        return categoryColors[category] || "bg-gray-100 text-gray-800 border-gray-200";
    };

    // ワードクラウドアイテムを事前に生成して状態として保存
    const [wordCloudItems] = useState(() => {
        // 各カテゴリの好きなものをフラット化
        const allLikes = personal.likes.items.flatMap(category => 
            category.items.map(item => ({
                text: item,
                category: category.category,
                color: getRandomColor(),
                size: getRandomSize(),
                rotation: getRandomRotation(),
                opacity: Math.random() * 0.5 + 0.5, // 0.5から1.0の間のランダムな不透明度
                position: {
                    top: `${Math.random() * 70 + 15}%`,
                    left: `${Math.random() * 70 + 15}%`,
                }
            }))
        );
        
        return allLikes;
    });

    return (
        <section className="content-background mb-8 p-5 md:p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2
                className={`text-xl md:text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-between hover:text-[var(--accent)] transition-colors duration-300 ${isOpen ? 'text-[var(--accent)]' : ''}`}
                onClick={onToggle}
            >
                <span>{personal.title}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </h2>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="mt-4 space-y-8">
                    {/* 好きなものセクション - ワードクラウド風 */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 border-b pb-2 text-center">{personal.likes.title}</h3>
                        
                        {/* 凡例 */}
                        <div className="mb-4 flex flex-wrap justify-center gap-3">
                            {personal.likes.items.map((category, index) => (
                                <div key={index} 
                                     className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category.category)}`}>
                                    <span>{category.category}</span>
                                </div>
                            ))}
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
                    
                    {/* 苦手なものセクション */}
                    <div>
                        <h3 className="text-xl font-semibold mt-4 mb-4 border-b pb-2">{personal.dislikes.title}</h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {personal.dislikes.items.map((item, index) => (
                                <span key={index} className="px-3 py-1 bg-red-100 text-red-800 border border-red-200 rounded-full text-sm hover:bg-red-200 transition-colors shadow-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    {/* 興味・関心セクション */}
                    <div>
                        <h3 className="text-xl font-semibold mt-4 mb-4 border-b pb-2">{personal.interests.title}</h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {personal.interests.items.map((item, index) => (
                                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200 rounded-full text-sm hover:bg-blue-200 transition-colors shadow-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalSection;
