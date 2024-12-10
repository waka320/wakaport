import { getAllArticles } from "@/lib/articles/articles"
import Link from 'next/link'

export default async function NewsPage() {
    const articles = await getAllArticles()

    return (
        <div className='white-background '>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">記事一覧</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <div
                            key={article.slug}
                            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
                        >
                            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                            <p className="text-gray-600 mb-4">{article.excerpt}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">{article.date}</span>
                                <Link
                                    href={`/news/${article.slug}`}
                                    className="text-blue-500 hover:underline"
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
