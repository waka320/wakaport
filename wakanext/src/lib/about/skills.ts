export const iconMapping: Record<string, { provider: string, name: string }> = {
    // 既存のマッピング
    "React": { provider: "logos", name: "react" },
    "Next.Js": { provider: "logos", name: "nextjs-icon" },
    "MaterialUI": { provider: "logos", name: "material-ui" },
    "shad/cn": { provider: "simple-icons", name: "shadcnui" },
    "prisma": { provider: "simple-icons", name: "prisma" },
    "MacOS": { provider: "logos", name: "apple" },
    "UbuntuDesktop": { provider: "logos", name: "ubuntu" },
    "Raspbian": { provider: "logos", name: "raspberry-pi" },
    "MariaDB": { provider: "logos", name: "mariadb" },
    "Azure": { provider: "logos", name: "microsoft-azure" },
    "Vercel": { provider: "logos", name: "vercel" },
    "Microsoft PowerPoint": { provider: "simple-icons", name: "microsoftpowerpoint" },
    "Microsoft Teams": { provider: "logos", name: "microsoft-teams" },
    
    // 不足しているマッピングを追加
    "HTML": { provider: "logos", name: "html-5" },
    "CSS": { provider: "logos", name: "css-3" },
    "JavaScript": { provider: "logos", name: "javascript" },
    "TypeScript": { provider: "logos", name: "typescript-icon" },
    "Python": { provider: "logos", name: "python" },
    "PHP": { provider: "logos", name: "php" },
    "MarkDown": { provider: "simple-icons", name: "markdown" },
    "Flask": { provider: "simple-icons", name: "flask" },
    "Django": { provider: "logos", name: "django-icon" },
    "BootStrap": { provider: "logos", name: "bootstrap" },
    "TailwindCSS": { provider: "logos", name: "tailwindcss-icon" },
    "Sass": { provider: "logos", name: "sass" },
    "Windows10/11": { provider: "logos", name: "microsoft-windows" },
    "WordPress": { provider: "logos", name: "wordpress-icon" },
    "GitHub": { provider: "logos", name: "github-icon" },
    "Slack": { provider: "logos", name: "slack-icon" }
};

export const skills = {
    title: "技術スタック",
    categories: [
        {
            name: "言語",
            items: [
                { name: "HTML", usage: "頻繁に使用", comment: "ウェブ開発の基本" },
                { name: "CSS", usage: "頻繁に使用", comment: "スタイリングの基本" },
                { name: "JavaScript", usage: "頻繁に使用", comment: "動的なウェブサイトを作成" },
                { name: "TypeScript", usage: "頻繁に使用", comment: "型安全なJavaScript" },
                { name: "Python", usage: "時々使用", comment: "データ分析やスクリプトに便利" },
                { name: "PHP", usage: "時々使用", comment: "サーバーサイドスクリプト" },
                { name: "MarkDown", usage: "頻繁に使用", comment: "ドキュメント作成に便利" },
            ],
        },
        {
            name: "Webフレームワーク",
            items: [
                { name: "Flask", usage: "時々使用", comment: "軽量なPythonフレームワーク" },
                { name: "Django", usage: "時々使用", comment: "フルスタックPythonフレームワーク" },
                { name: "React", usage: "頻繁に使用", comment: "UIライブラリ" },
                { name: "Next.Js", usage: "頻繁に使用", comment: "Reactのフレームワーク" },
            ],
        },
        {
            name: "ライブラリ",
            items: [
                { name: "BootStrap", usage: "時々使用", comment: "CSSフレームワーク" },
                { name: "MaterialUI", usage: "時々使用", comment: "React用UIライブラリ" },
                { name: "TailwindCSS", usage: "頻繁に使用", comment: "ユーティリティファーストのCSSフレームワーク" },
                { name: "shad/cn", usage: "時々使用", comment: "CSSライブラリ" },
                { name: "Sass", usage: "時々使用", comment: "CSSプリプロセッサ" },
                { name: "prisma", usage: "時々使用", comment: "データベースORM" },
            ],
        },
        {
            name: "OS",
            items: [
                { name: "Windows10/11", usage: "頻繁に使用", comment: "メインのデスクトップOS" },
                { name: "MacOS", usage: "頻繁に使用", comment: "開発用ラップトップOS" },
                { name: "UbuntuDesktop", usage: "時々使用", comment: "開発用Linuxディストリビューション" },
                { name: "Raspbian", usage: "時々使用", comment: "Raspberry Pi用OS" },
            ],
        },
        {
            name: "その他",
            items: [
                { name: "MariaDB", usage: "時々使用", comment: "データベース管理システム" },
                { name: "Azure", usage: "時々使用", comment: "クラウドサービス" },
                { name: "Vercel", usage: "頻繁に使用", comment: "フロントエンドデプロイメント" },
                { name: "WordPress", usage: "時々使用", comment: "CMSプラットフォーム" },
                { name: "GitHub", usage: "頻繁に使用", comment: "バージョン管理" },
                { name: "Microsoft PowerPoint", usage: "時々使用", comment: "プレゼンテーションツール" },
                { name: "Microsoft Teams", usage: "頻繁に使用", comment: "コラボレーションツール" },
                { name: "Slack", usage: "頻繁に使用", comment: "チームコミュニケーションツール" },
            ],
        },
    ],
};
