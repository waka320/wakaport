import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown'
import Link from 'next/link'
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

        if (!article) {
            notFound()
        }

        return (
            <div className='white-background min-h-screen py-8'>
                <div className="p-4 max-w-4xl mx-auto">
                    <h1 className="text-center text-3xl font-bold mb-8 text-[var(--primary)]">{article.title}</h1>
                    <article className="content-background p-6 rounded-lg shadow-lg">
                        <div className="text-gray-600 mb-6 text-center">
                            <time>{article.date}</time>
                        </div>
                        <div className="prose lg:prose-xl text-[var(--foreground)]">
                            <Markdown>{article.content}</Markdown>
                        </div>
                    </article>

                    <div className="mt-8 text-center">
                        <Link href="/news" className="text-[var(--link-color)] hover:text-[var(--link-hover-color)] hover:underline">
                            記事一覧に戻る
                        </Link>
                    </div>
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
