import Link from "next/link"
import Image from "next/image"
import XTimeline from "./XTimeline"
import { Button } from "@/components/ui/Button"

export default function Social() {
    return (
        <div className="container px-4 pb-8">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="content-background pixel-panel p-4">
                    <h2 className="text-lg font-semibold mb-2">GitHub</h2>
                    <Link href="https://github.com/waka320" target="_blank" className="inline-flex items-center gap-2">
                        <Image src="/images/icon.png" alt="GitHub" width={24} height={24} />
                        <span>@waka320</span>
                    </Link>
                    <div className="mt-3">
                        <Button href="https://github.com/waka320" external variant="pixel">Visit GitHub</Button>
                    </div>
                </div>
                <div className="content-background pixel-panel p-4">
                    <h2 className="text-lg font-semibold mb-2">X</h2>
                    <XTimeline />
                </div>
            </div>
            <div className="content-background pixel-panel p-4 mt-4 text-right">
                <Button href="/contact" withArrow variant="pixel">お問い合わせへ</Button>
            </div>
        </div>
    )
}


