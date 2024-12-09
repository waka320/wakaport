import { Card } from "./card";
export default function Content() {
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
                title="Products"
                paragraphs={[
                    "TypeScript, React, Next.js",
                    "TailwindCSS, SASS",
                    "フロントエンド開発に特化したスキルセット"
                ]}
                buttonText="やったこと"
                buttonHref="/products"
            />
        </div>


    )
}
