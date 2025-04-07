import { getAllArticles } from "@/lib/articles/articles"
import Link from 'next/link'

export default async function NewsPage() {
    const articles = await getAllArticles()

    return (
        <div className='white-background min-h-screen py-8'>
            <div className="p-4 max-w-4xl mx-auto">
                <h1 className="text-center text-3xl font-bold mb-8 text-[var(--primary)]">記事一覧</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {articles.map((article) => (
                        <div
                            key={article.slug}
                            className="content-background shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow bg-white dark:bg-[var(--background)]"
                        >
                            <h2 className="text-lg md:text-xl font-semibold mb-2 text-[var(--foreground)]">{article.title}</h2>
                            <p className="text-[var(--text-muted-color)] mb-4 text-sm md:text-base">{article.excerpt}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs md:text-sm text-[var(--text-muted-color)]">{article.date}</span>
                                <Link
                                    href={`/news/${article.slug}`}
                                    className="link text-[var(--link-color)] hover:text-[var(--link-hover-color)] hover:underline text-sm md:text-base"
                                >
                                    続きを読む
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
