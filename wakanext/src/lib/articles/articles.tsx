import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface FrontMatterData {
    date?: string | Date
    title?: string
    excerpt?: string
    [key: string]: unknown
}

export function formatArticleDate(dateInput: string | Date): string {
    const date = new Date(dateInput)

    return new Intl.DateTimeFormat('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'short'
    }).format(date)
}

type ArticleProps = {
    slug: string
    title: string
    date: string
    excerpt: string
    content: string
}

export function getAllArticles(): ArticleProps[] {
    const articlesDirectory = path.join(process.cwd(), 'src/lib/articles/content')

    if (!fs.existsSync(articlesDirectory)) {
        console.error('Articles directory not found')
        return []
    }

    const fileNames = fs.readdirSync(articlesDirectory)
        .filter(fileName => fileName.endsWith('.md'))

    const articles = fileNames.map(fileName => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const { data, content } = matter<FrontMatterData>(fileContents)

        return {
            slug,
            content,
            date: formatArticleDate(data.date || new Date()),
            title: data.title || '',
            excerpt: data.excerpt || '',
        }
    })

    return articles.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
}

export function getArticleBySlug(slug: string): ArticleProps {
    const fullPath = path.join(process.cwd(), `src/lib/articles/content/${slug}.md`)

    if (!fs.existsSync(fullPath)) {
        throw new Error(`Article with slug ${slug} not found`)
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // matter関数の型を明示的に指定
    const { data, content } = matter<FrontMatterData>(fileContents)

    return {
        slug,
        content,
        date: formatArticleDate(data.date || new Date()),
        title: data.title || '',
        excerpt: data.excerpt || '',
    }
}
