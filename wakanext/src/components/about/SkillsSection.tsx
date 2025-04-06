import React, { useState } from 'react';
import { skills, iconMapping } from '@/lib/about/skills';
import Image from 'next/image';

interface SkillsSectionProps {
    isOpen: boolean;
    onToggle: () => void;
}

const SkillsSection = ({ isOpen, onToggle }: SkillsSectionProps) => {
    interface Skill {
        name: string;
        usage: string;
        comment: string;
    }

    const [selectedSkill, setSelectedSkill] = useState<Skill | undefined>(undefined);

    const handleSkillClick = (skill: { name: string; usage: string; comment: string }) => {
        setSelectedSkill(skill);
    };

    const closePopup = () => {
        setSelectedSkill(undefined);
    };

    // アイコンURLを取得する関数
    const getIconUrl = (name: string) => {
        // 特別対応が必要なアイコンの対応
        if (name === "Microsoft PowerPoint") {
            return "https://api.iconify.design/simple-icons/microsoftpowerpoint.svg";
        }

        if (iconMapping[name]) {
            const { provider, name: iconName } = iconMapping[name];
            return `https://api.iconify.design/${provider}/${iconName}.svg`;
        }
        // バックアップとしてIcons8を使用
        return `https://img.icons8.com/color/50/${name.toLowerCase().replace(/\s+/g, '-')}.png`;
    };

    // スキルの使用頻度に基づいて色を取得
    const getUsageColor = (usage: string) => {
        if (usage === "頻繁に使用") return "bg-green-100 text-green-800";
        if (usage === "時々使用") return "bg-blue-100 text-blue-800";
        return "bg-gray-100 text-gray-800";
    };

    return (
        <section className="content-background mb-8 p-5 md:p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2
                className={`text-xl md:text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-between hover:text-[var(--accent)] transition-colors duration-300 ${isOpen ? 'text-[var(--accent)]' : ''}`}
                onClick={onToggle}
            >
                <span>{skills.title}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </h2>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {skills.categories.map((category, index) => (
                    <div key={index} className="mb-8 mt-4">
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">{category.name}</h3>
                        <div className="flex flex-wrap gap-2 md:gap-3 justify-start">
                            {category.items.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className="cursor-pointer flex flex-col items-start hover:scale-110 transition-transform duration-200 bg-white/50 p-3 rounded-lg shadow-sm w-[85px] sm:w-[100px] md:w-[120px] h-[85px] sm:h-[100px] md:h-[120px]"
                                    onClick={() => handleSkillClick(item)}
                                >
                                    <div className="flex justify-start w-full h-[40px] sm:h-[45px] md:h-[50px] mb-2">
                                        <Image
                                            src={getIconUrl(item.name)}
                                            alt={item.name}
                                            width={40}
                                            height={40}
                                            unoptimized={true}
                                            className="object-contain sm:w-[45px] md:w-[50px] sm:h-[45px] md:h-[50px]"
                                        />
                                    </div>
                                    <span className="text-xs sm:text-sm font-medium">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {selectedSkill && (
                <div className="fixed inset-0 z-50 overflow-y-auto py-10" onClick={closePopup}>
                    <div className="flex min-h-full items-center justify-center p-4">
                        <div 
                            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative mx-auto"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex items-center mb-4">
                                <Image
                                    src={getIconUrl(selectedSkill.name)}
                                    alt={selectedSkill.name}
                                    width={40}
                                    height={40}
                                    unoptimized={true}
                                    className="mr-3"
                                />
                                <h3 className="text-xl font-semibold">{selectedSkill.name}</h3>
                            </div>
                            <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${getUsageColor(selectedSkill.usage)}`}>
                                {selectedSkill.usage}
                            </div>
                            <p className="text-sm text-gray-700 mb-4">{selectedSkill.comment}</p>
                            <div className="flex justify-end">
                                <button
                                    className="px-4 py-2 bg-[var(--accent)] text-white rounded hover:bg-opacity-90 transition-colors duration-200"
                                    onClick={closePopup}
                                >
                                    閉じる
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 bg-black bg-opacity-50 -z-10"></div>
                </div>
            )}
        </section>
    );
};

export default SkillsSection;
