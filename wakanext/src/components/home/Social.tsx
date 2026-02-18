import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"

export default function Social() {
    return (
        <div className="container px-1 md:px-4 pb-4 md:pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {/* GitHub */}
                <div className="content-background pixel-panel p-3 md:p-4">
                    <h2 className="text-lg md:text-xl font-semibold mb-2">GitHub</h2>
                    <Link href="https://github.com/waka320" target="_blank" className="inline-flex items-center gap-2 no-underline">
                        <Image src="/images/icon.png" alt="GitHub" width={20} height={20} />
                        <span className="text-base text-inherit">@waka320</span>
                    </Link>
                    <div className="mt-2 md:mt-3">
                        <Button href="https://github.com/waka320" external variant="pixel" className="text-base">Visit</Button>
                    </div>
                </div>

                {/* X (Twitter) */}
                <div className="content-background pixel-panel p-3 md:p-4">
                    <h2 className="text-lg md:text-xl font-semibold mb-2">X</h2>
                    <Link href="https://x.com/waka320port" target="_blank" className="inline-flex items-center gap-2 no-underline">
                        <span className="text-base text-inherit">@waka320port</span>
                    </Link>
                    <div className="mt-2 md:mt-3">
                        <Button href="https://x.com/waka320port" external variant="pixel" className="text-base">Open X</Button>
                    </div>
                </div>

                {/* LinkedIn */}
                <div className="content-background pixel-panel p-3 md:p-4">
                    <h2 className="text-lg md:text-xl font-semibold mb-2">LinkedIn</h2>
                    <Link href="https://www.linkedin.com/in/yuki-wakamatsu28/" target="_blank" className="inline-flex items-center gap-2 no-underline">
                        <span className="text-base text-inherit">Yuki Wakamatsu</span>
                    </Link>
                    <div className="mt-2 md:mt-3">
                        <Button href="https://www.linkedin.com/in/yuki-wakamatsu28/" external variant="pixel" className="text-base">Open LinkedIn</Button>
                    </div>
                </div>

                {/* Contact */}
                <div className="content-background pixel-panel p-3 md:p-4">
                    <h2 className="text-lg md:text-xl font-semibold mb-2">Contact</h2>
                    <p className="text-base text-muted-foreground">ご相談・ご連絡はこちらから</p>
                    <div className="mt-2 md:mt-3">
                        <Button href="/contact" variant="pixel" className="text-base">お問い合わせ</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


