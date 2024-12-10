import { Card } from "./Card";
import Link from "next/link";
import { Button } from "../ui/Button";
import { getAllArticles } from "@/lib/articles/articles"

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
                imageSrc="/images/profile.jpg"
                title="Progress"
                paragraphs={[
                    "文系学生でありながら、様々な場面でWebアプリを開発しました。",
                    "また、大学祭の実行委員会で幹部としてイベントの責任者としての活動も行いました。",
                    "様々な場所で常に何かを作り続ける、大学生生活を歩んでいます。"
                ]}
                buttonText="これまで"
                buttonHref="/products"
            />
            <div className="content-background mb-4">
                <h2>News</h2>
                <div className="flex container">
                    <div className="flex-[1]">

                    </div>
                    <div className="flex-[2] flex flex-col justify-between">
                        <div>
                            <p>近況をブログの形で報告します。</p>
                            <p>
                                <span className="font-bold">「
                                    <Link
                                        href={`/news/${latestArticle.slug}`}
                                        className="text-blue-500 hover:underline"
                                    >
                                        {latestArticle.title}
                                    </Link>
                                    」
                                </span>
                                を
                                <span className="font-bold">
                                    {latestArticle.date}
                                </span>
                                に、投稿しました。
                            </p>
                        </div>
                        <div className="mt-4 self-start">
                            <Button href="/news">
                                一覧へ
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
