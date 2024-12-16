
"use client";

import Link from 'next/link';
import React from 'react';

const AboutPage = () => (
    <div className='white-background'>
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">自己紹介</h1>

            <section className="content-background mb-8">
                <h2 className="text-2xl font-semibold mb-4">若松勇希</h2>
                <p className="text-gray-600">
                    名古屋大学情報学部人間社会情報科学科の学生です。Webエンジニアを目指し、Next.jsやTypeScriptを中心に学んでいます。
                </p>
            </section>

            <section className="content-background mb-8">
                <h2 className="text-2xl font-semibold mb-4">所属</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>名古屋大学 情報学部 人間社会情報科学科 2022年4月から在学中</li>
                    <li><Link className='text-blue-500 hover:underline' href="https://mdg.si.i.nagoya-u.ac.jp/">Media&Design Group – 名古屋大学 安田・遠藤・浦田研究室</Link> 2024年9月から所属</li>
                    <li><Link className='text-blue-500 hover:underline' href="https://aixtal.com/">アイクリスタル株式会社</Link>2023年8月からインターン</li>
                    <li><Link className='text-blue-500 hover:underline' href="https://meidaisai.com/">名大祭実行委員会</Link> 2022年4月〜2024年9月の期間に所属</li>
                    <li><Link className='text-blue-500 hover:underline' href="https://www.jackapp.jp/">アプリ開発団体 jack</Link> 2022年4月〜2024年9月の期間に所属</li>
                </ul>
            </section>

            <section className='content-background'>
                <h2 className="text-2xl font-semibold mb-4">技術スタック</h2>
                <h3 className="text-xl font-semibold mb-4">言語</h3>

                <ul className="list-disc pl-5 space-y-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>PHP</li>
                    <li>MarkDown</li>
                </ul>
                <h3 className="text-xl font-semibold mt-2 mb-4">Webフレームワーク</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Flask</li>
                    <li>Django</li>
                    <li>React</li>
                    <li>Next.Js</li>
                    <li>Vue.js</li>
                </ul>
                <h3 className="text-xl font-semibold mt-2 mb-4">ライブラリ</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>BootStrap</li>
                    <li>MaterialUI</li>
                    <li>TailwindCSS</li>
                    <li>shad/cn</li>
                    <li>Sass</li>
                    <li>prisma</li>
                    <li>matplotlib</li>
                </ul>
                <h3 className="text-xl font-semibold mt-2 mb-4">OS</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Windows10/11</li>
                    <li>macOS</li>
                    <li>UbuntuDesktop</li>
                    <li>Raspbian</li>
                </ul>
                <h3 className="text-xl font-semibold mt-2 mb-4">その他</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>MariaDB</li>
                    <li>Azure</li>
                    <li>Vercel</li>
                    <li>WordPress</li>
                    <li>GitHub</li>
                    <li>Microsoft PowerPoint</li>
                    <li>MicrosoftTeams</li>
                    <li>Slack</li>
                </ul>
            </section>

            <section className="content-background mb-8">
                <h2 className="text-2xl font-semibold mb-4">資格・賞与</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>英検準1級 2020年2月 取得</li>
                    <li>普通四輪 2023年8月 取得</li>
                    <li>JPHACKS2024 AwardDay進出、三菱重工スポンサー賞、NTTドコモスポンサー賞 2024年取得</li>
                </ul>
            </section>

            <section className="content-background mb-8">
                <h2 className="text-2xl font-semibold mb-4">個人的なこと</h2>
                <h3 className="text-xl font-semibold mb-4">スキ</h3>
                <h4>ゲーム</h4>
                <p>シリーズ：カービィ、ダンガンロンパ、スマブラ</p>
                <h4>ニンゲン</h4>
                <p>桜井政博、庵野秀明、藤子・F・不二雄、春とヒコーキ、まるピンク</p>
                <h4>アニメ</h4>
                <h3 className="text-xl font-semibold mt-2 mb-4">ニガテ</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>やることの管理</li>
                    <li>じっとすること</li>
                    <li>球技</li>
                    <li>計算</li>
                    <li>高いところ・観覧車</li>
                    <li>雑談</li>
                </ul>
                <h3 className="text-xl font-semibold mt-2 mb-4">サイキンのキョウミ</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>鉄道</li>
                    <li>麻雀</li>
                    <li>ジェットコースター</li>
                </ul>
            </section>
        </div>
    </div>
);

export default AboutPage;
