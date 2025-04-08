import { Card } from "./Card";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles/articles";
import { Button } from "@/components/ui/Button";

export default async function Content() {
    const articles = await getAllArticles()
    const latestArticle = articles[0]

    return (
        <div className="white-background">
            <Card
                imageSrc="/images/profile.jpg"
                title="About"
                paragraphs={[
                    "名古屋大学情報学部人間・社会情報学科の３年生です。",
                    "研究領域は、岐阜県高山市における、観光×ICTです。",
                    "また、Webのフロントエンドを始めとした技術に関心を持っています。"
                ]}
                buttonText="私について"
                buttonHref="/about"
            />
            <Card
                imageSrc="/images/cloth.jpg"
                title="Progress"
                paragraphs={[
                    "文系学生でありながら、様々な場面でWebアプリを開発しました。",
                    "また、大学祭の実行委員会で幹部としてイベントの責任者としての活動も行いました。",
                    "様々な場所で常に何かを作り続ける、大学生生活を歩んでいます。"
                ]}
                buttonText="これまで"
                buttonHref="/progress"
            />
            <div className="content-background mb-4 p-4 transition-all duration-300 hover:shadow-lg">
                <h2 className="text-xl md:text-2xl mb-4 text-[var(--foreground)]">News</h2>
                <div className="container">
                    {/* メインのコンテナ - 暗い背景 */}
                    <div className="bg-gray-50/90 dark:bg-gray-800/90 p-4 rounded-lg border-l-4 border-orange-500 mb-4 shadow-sm">
                        <p className="text-sm md:text-base mb-4 text-gray-700 dark:text-gray-300">近況をブログの形で報告します。最新の投稿をご覧ください。</p>

                        {/* 記事カード - 少し明るめの背景で区別 */}
                        <div className="bg-white/90 dark:bg-gray-700/90 p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md mb-4 border border-gray-100 dark:border-gray-600">
                            <div className="flex items-center mb-2">
                                <span className="bg-orange-500 dark:bg-orange-600 text-white text-xs px-2 py-1 rounded mr-2 shadow-sm">NEW</span>
                                <span className="text-xs text-gray-600 dark:text-gray-400">{latestArticle.date}</span>
                            </div>
                            <h3 className="font-bold text-base md:text-lg text-gray-800 dark:text-white mb-2">
                                <Link
                                    href={`/news/${latestArticle.slug}`}
                                    className="hover:underline hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
                                >
                                    {latestArticle.title}
                                </Link>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{latestArticle.excerpt}</p>
                        </div>

                        <div className="text-right">
                            <Button href="/news" withArrow>すべての記事を見る</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
