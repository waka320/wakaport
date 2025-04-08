import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown'
import Link from 'next/link'
import { FiCalendar, FiArrowLeft, FiClock } from 'react-icons/fi'
import { getArticleBySlug, getAllArticles } from "@/lib/articles/articles"

export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map(article => ({ slug: article.slug }));
}

type PageProps = {
    params: Promise<{ slug: string }>
}

export default async function ArticleDetailPage({
    params
}: PageProps) {
    try {
        const { slug } = await params
        const article = getArticleBySlug(slug)
        const allArticles = getAllArticles()

        // 前後の記事を取得
        const currentIndex = allArticles.findIndex(a => a.slug === slug)
        const prevArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null
        const nextArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null

        if (!article) {
            notFound()
        }

        // 閲覧時間の見積もり（1分あたり500文字と仮定）
        const readingTime = Math.max(1, Math.ceil(article.content.length / 500))

        return (
            <div className='white-background min-h-screen py-6 md:py-12'>
                <div className="px-3 sm:px-6 max-w-4xl mx-auto">
                    {/* 戻るボタン（モバイルでは上部に配置） */}
                    <div className="block sm:hidden mb-4">
                        <Link href="/news" className="flex items-center text-[var(--link-color)] hover:text-[var(--link-hover-color)] transition-colors p-2 -ml-2">
                            <FiArrowLeft className="mr-1.5" />
                            <span>記事一覧</span>
                        </Link>
                    </div>

                    <div className="article-background  rounded-lg shadow-md overflow-hidden mb-6 sm:mb-8">
                        <div className="h-2 sm:h-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>

                        <div className="p-4 sm:p-5 md:p-8">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[var(--foreground)]">
                                {article.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-[var(--text-muted-color)]">
                                <div className="flex items-center">
                                    <FiCalendar className="mr-1" />
                                    <time>{article.date}</time>
                                </div>
                                <div className="flex items-center">
                                    <FiClock className="mr-1" />
                                    <span>{readingTime}分で読めます</span>
                                </div>
                            </div>

                            <div className="prose prose-sm sm:prose md:prose-lg max-w-none text-[var(--foreground)] 
                                           prose-headings:text-[var(--foreground)] prose-p:text-[var(--foreground)] 
                                           prose-a:text-[var(--link-color)] prose-a:no-underline hover:prose-a:text-[var(--link-hover-color)]
                                           prose-blockquote:border-l-[var(--primary)] prose-blockquote:bg-[var(--content-background-lighter)]
                                           prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-md
                                           prose-code:bg-[var(--content-background-lighter)] prose-code:p-1 prose-code:rounded
                                           prose-pre:bg-[var(--content-background-darker)]
                                           prose-img:mx-auto prose-img:rounded-md prose-img:max-w-full
                                           prose-table:text-sm prose-table:overflow-x-auto">
                                <Markdown>{article.content}</Markdown>
                            </div>
                        </div>
                    </div>

                    {/* デスクトップ用の戻るボタン */}
                    <div className="hidden sm:flex justify-between items-center gap-4 mb-8">
                        <Link href="/news" className="flex items-center text-[var(--link-color)] hover:text-[var(--link-hover-color)] transition-colors">
                            <FiArrowLeft className="mr-1.5" />
                            <span>記事一覧に戻る</span>
                        </Link>

                        <div className="flex gap-4">
                            {/* SNSシェアボタンなどを追加できます */}
                        </div>
                    </div>

                    {(prevArticle || nextArticle) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-0">
                            {prevArticle && (
                                <Link href={`/news/${prevArticle.slug}`} className="group touch-manipulation">
                                    <div className="content-background p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all active:translate-y-0.5 h-full">
                                        <div className="text-xs text-[var(--text-muted-color)] mb-1">前の記事</div>
                                        <div className="font-medium group-hover:text-[var(--primary)] transition-colors text-sm sm:text-base">
                                            {prevArticle.title}
                                        </div>
                                    </div>
                                </Link>
                            )}
                            {nextArticle && (
                                <Link href={`/news/${nextArticle.slug}`} className="group touch-manipulation sm:ml-auto">
                                    <div className="content-background p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all active:translate-y-0.5 h-full">
                                        <div className="text-xs text-[var(--text-muted-color)] mb-1">次の記事</div>
                                        <div className="font-medium group-hover:text-[var(--primary)] transition-colors text-sm sm:text-base">
                                            {nextArticle.title}
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
    } catch {
        notFound()
    }
}

export async function generateMetadata({
    params
}: PageProps): Promise<Metadata> {
    try {
        const { slug } = await params
        const article = getArticleBySlug(slug)

        if (article) {
            return {
                title: article.title,
                description: article.excerpt
            }
        } else {
            return {
                title: '記事が見つかりません',
                description: 'この記事が見つかりませんでした'
            }
        }
    } catch {
        return {
            title: '記事が見つかりません',
            description: 'この記事が見つかりませんでした'
        }
    }
}
