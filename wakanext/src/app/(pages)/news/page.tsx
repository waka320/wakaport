import { getAllArticles } from "@/lib/articles/articles"
import Link from 'next/link'
import { FiCalendar, FiArrowRight } from 'react-icons/fi'

export default async function NewsPage() {
    const articles = await getAllArticles()

    return (
        <div className='white-background min-h-screen py-8 '>
            <div className="p-4 sm:p-4 max-w-5xl mx-auto">
                <h1 className="text-center text-3xl font-bold mb-4 text-[var(--primary)]">
                    記事一覧
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    近況をつらつらと
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {articles.map((article) => (
                        <Link
                            href={`/news/${article.slug}`}
                            key={article.slug}
                            className="group flex flex-col h-full touch-manipulation"
                        >
                            <div className="content-background shadow-md rounded-lg overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:shadow-xl active:scale-98 hover:-translate-y-1 bg-white dark:bg-[var(--card-background)]">
                                <div className="h-2 sm:h-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
                                <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full">
                                    <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[var(--heading-color)] group-hover:text-[var(--primary)] transition-colors">
                                        {article.title}
                                    </h2>

                                    <div className="flex items-center text-xs text-[var(--text-muted-color)] mb-3 sm:mb-4">
                                        <FiCalendar className="mr-1" />
                                        <span>{article.date}</span>
                                    </div>

                                    <p className="text-[var(--text-color)] dark:text-[var(--text-color-dark)] mb-4 sm:mb-6 flex-grow text-xs sm:text-sm md:text-base line-clamp-3 sm:line-clamp-none">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center justify-end text-[var(--link-color)] group-hover:text-[var(--link-hover-color)] transition-colors">
                                        <span className="text-xs sm:text-sm font-medium">続きを読む</span>
                                        <FiArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {articles.length === 0 && (
                    <div className="text-center py-8 sm:py-12 text-[var(--text-muted-color)] text-sm sm:text-base">
                        現在記事はありません。また後ほどご確認ください。
                    </div>
                )}
            </div>
        </div>
    )
}
