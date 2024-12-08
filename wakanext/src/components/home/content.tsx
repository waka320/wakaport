import Image from "next/image";
import { Button } from "../ui/button";
export default function Content() {
    return (
        <div className="content-background">
            <h2>About</h2>
            <div className="flex container">
                <div className="flex-[1]">
                    <Image
                        src="/images/profile.jpg"
                        alt="プロフィール画像"
                        width={150}
                        height={150}
                        className="rounded-lg border-4 border-black"
                    />
                </div>
                <div className="flex-[2] flex flex-col justify-between">
                    <div>
                        <p>名古屋大学情報学部人間・社会情報学科の３年生です。</p>
                        <p>研究領域は、岐阜県高山市における、観光×ICTです。</p>
                        <p>また、Webのフロントエンドを始めとした技術に関心を持っています。</p>
                    </div>
                    <div className="mt-2 self-start">
                        <Button href="/about">
                            私について
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
