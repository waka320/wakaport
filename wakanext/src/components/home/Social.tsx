import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"

export default function Social() {
    return (
        <div className="container px-4 pb-4 md:pb-8">
            <div className="grid md:grid-cols-3 gap-3 md:gap-4">
                {/* GitHub */}
                <div className="content-background pixel-panel p-3 md:p-4">
                    <h2 className="text-base md:text-lg font-semibold mb-2">GitHub</h2>
                    <Link href="https://github.com/waka320" target="_blank" className="inline-flex items-center gap-2">
                        <Image src="/images/icon.png" alt="GitHub" width={20} height={20} />
                        <span className="text-sm">@waka320</span>
                    </Link>
                    <div className="mt-2 md:mt-3">
                        <Button href="https://github.com/waka320" external variant="pixel" className="text-sm">Visit</Button>
                    </div>
                </div>

                {/* X (Twitter) - ウィジェットは使わずリンクのみで軽量化 */}
                <div className="content-background pixel-panel p-3 md:p-4">
                    <h2 className="text-base md:text-lg font-semibold mb-2">X</h2>
                    <p className="text-sm text-muted-foreground">最近の投稿はXでチェック</p>
                    <div className="mt-2 md:mt-3">
                        <Button href="https://twitter.com/waka320port" external variant="pixel" className="text-sm">Open X</Button>
                    </div>
                </div>

                {/* Contact */}
                <div className="content-background pixel-panel p-3 md:p-4">
                    <h2 className="text-base md:text-lg font-semibold mb-2">Contact</h2>
                    <p className="text-sm text-muted-foreground">ご相談・ご連絡はこちらから</p>
                    <div className="mt-2 md:mt-3">
                        <Button href="/contact" withArrow variant="pixel" className="text-sm">お問い合わせ</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


