import { Card } from "./Card";
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
                title="Progress"
                paragraphs={[
                    "文系学生でありながら、様々な場面でWebアプリを開発しました。",
                    "また、大学祭の実行委員会で幹部としてイベントの責任者としての活動も行いました。",
                    "様々な場所で常に何かを作り続ける、大学生生活を歩んでいます。"
                ]}
                buttonText="これまで"
                buttonHref="/products"
            />
            <Card
                imageSrc="/images/profile.jpg"
                title="News"
                paragraphs={[
                    "近況をブログの形で報告します",
                    "「日付」に、",
                    "「タイトル」を投稿しました。"
                ]}
                buttonText="お知らせ"
                buttonHref="/news"
            />
        </div>


    )
}