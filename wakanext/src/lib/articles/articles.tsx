import fs from 'fs'
import path from 'path'

type ArticleProps = {
    slug: string
    title: string
    date: string
    excerpt: string
    content: string
}

function parseMarkdownFile(fileContents: string): {
    title: string,
    date: string,
    excerpt: string,
    content: string
} {
    const lines = fileContents.split('\n')
    const metadataEnd = lines.findIndex(line => line.trim() === '---')

    const metadata: { [key: string]: string } = {}
    const contentLines = lines.slice(metadataEnd + 1)

    lines.slice(1, metadataEnd).forEach(line => {
        const [key, value] = line.split(':').map(part => part.trim())
        metadata[key] = value.replace(/^["']|["']$/g, '')
    })

    return {
        title: metadata['title'] || '',
        date: metadata['date'] || new Date().toISOString(),
        excerpt: metadata['excerpt'] || '',
        content: contentLines.join('\n')
    }
}

export function getAllArticles(): ArticleProps[] {
    const articlesDirectory = path.join(process.cwd(), 'src/lib/articles/content')

    const fileNames = fs.readdirSync(articlesDirectory)
        .filter(fileName => fileName.endsWith('.md'))

    const articles = fileNames.map(fileName => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const { title, date, excerpt, content } = parseMarkdownFile(fileContents)

        return {
            slug,
            title,
            date: formatArticleDate(date),
            excerpt,
            content
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
    const { title, date, excerpt, content } = parseMarkdownFile(fileContents)

    return {
        slug,
        title,
        date: formatArticleDate(date),
        excerpt,
        content
    }
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
