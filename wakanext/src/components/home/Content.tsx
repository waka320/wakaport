import { Card } from "./Card";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles/articles";
import { Button } from "@/components/ui/Button";
import { Card as ShadCard, CardContent, CardHeader, CardTitle } from "@/components/shad/ui/card";
import { Badge } from "@/components/shad/ui/badge";
import { Container } from "@/components/ui/Container";

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
            <Container className="mb-4">
                <h2 className="text-xl md:text-2xl mb-4">News</h2>
                <ShadCard className="mb-4 border-l-4 border-orange-500">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm md:text-base text-muted-foreground">近況をブログの形で報告します。最新の投稿をご覧ください。</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ShadCard className="mb-3 transition-all duration-300 hover:-translate-y-1">
                            <CardHeader className="py-2">
                                <div className="flex items-center gap-2">
                                    <Badge className="bg-orange-500 text-white dark:bg-orange-600">NEW</Badge>
                                    <span className="text-xs text-muted-foreground">{latestArticle.date}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <h3 className="font-bold text-base md:text-lg mb-2">
                                    <Link
                                        href={`/news/${latestArticle.slug}`}
                                        className="hover:underline hover:text-orange-600 dark:hover:text-orange-400"
                                    >
                                        {latestArticle.title}
                                    </Link>
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">{latestArticle.excerpt}</p>
                            </CardContent>
                        </ShadCard>
                        <div className="text-right">
                            <Button href="/news" withArrow>すべての記事を見る</Button>
                        </div>
                    </CardContent>
                </ShadCard>
            </Container>
        </div>
    )
}
