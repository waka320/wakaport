"use client"

import { useEffect, useRef, useState } from "react"

type XTimelineProps = {
    handle?: string
    height?: number
}

let lastWidgetLoadMs = 0

export default function XTimeline({ handle, height = 380 }: XTimelineProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [fallback, setFallback] = useState(false)
    const xHandle = handle || process.env.NEXT_PUBLIC_X_HANDLE || "waka320port"

    useEffect(() => {
        if (!ref.current) return

        const loadWidgets = () => {
            const now = Date.now()
            const existing = document.querySelector<HTMLScriptElement>("script#x-widgets")
            if (existing) {
                // @ts-expect-error x widgets may not be typed
                window.twttr?.widgets?.load(ref.current)
                lastWidgetLoadMs = now
                return
            }
            // throttle hard reloads to avoid 429 in dev HMR
            if (now - lastWidgetLoadMs < 60000) {
                // @ts-expect-error x widgets may not be typed
                window.twttr?.widgets?.load(ref.current)
                return
            }
            const s = document.createElement("script")
            s.id = "x-widgets"
            s.async = true
            s.src = "https://platform.twitter.com/widgets.js"
            s.charset = "utf-8"
            s.onload = () => {
                // @ts-expect-error x widgets may not be typed
                window.twttr?.widgets?.load(ref.current)
                lastWidgetLoadMs = Date.now()
            }
            document.body.appendChild(s)
        }

        const io = new IntersectionObserver((entries) => {
            const visible = entries.some(e => e.isIntersecting)
            if (visible) {
                loadWidgets()
                // Fallback if no iframe appears within timeout (likely 429)
                const t = window.setTimeout(() => {
                    const hasIframe = !!ref.current?.querySelector("iframe.twitter-timeline")
                    if (!hasIframe) setFallback(true)
                }, 4000)
                io.disconnect()
                return () => window.clearTimeout(t)
            }
        }, { threshold: 0.1 })

        io.observe(ref.current)
        return () => io.disconnect()
    }, [])

    if (fallback) {
        return (
            <div className="overflow-hidden rounded-md">
                <div className="text-sm text-muted-foreground mb-2">Xの埋め込みを読み込めませんでした。リンクからご覧ください。</div>
                <a href={`https://twitter.com/${xHandle}`} target="_blank" rel="noopener noreferrer" className="underline">
                    @{xHandle} をXで開く
                </a>
            </div>
        )
    }

    return (
        <div ref={ref} className="overflow-hidden rounded-md">
            <a
                className="twitter-timeline"
                data-height={String(height)}
                data-dnt="true"
                data-tweet-limit="3"
                href={`https://twitter.com/${xHandle}?ref_src=twsrc%5Etfw`}
            >
                Tweets by {xHandle}
            </a>
        </div>
    )
}



