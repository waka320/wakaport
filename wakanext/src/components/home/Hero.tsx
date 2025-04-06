import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="flex flex-col lg:flex-row container min-h-[80vh] lg:min-h-[100svh] items-center justify-between lg:items-start relative px-4 py-8 lg:py-0">
            <div className="w-full lg:flex-[3] flex justify-center lg:justify-start">
                <div className="mt-8 lg:mt-32 mx-auto lg:mx-3 p-4 lg:p-6 border-4 border-gray-800 dark:border-gray-200 hero shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-sm">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold border-none text-center lg:text-left">welcome to <br />
                        <span className="text-4xl md:text-5xl lg:text-9xl relative">
                            Wakaport<span className="text-orange-500 dark:text-orange-400 animate-pulse-dot">.</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-1.5 bg-orange-500 animate-expand"></span>
                        </span>
                    </h1>
                    <p className="mt-4  font-light text-center lg:text-left">my Portal and Portfolio.</p>
                </div>
            </div>

            <div className="mt- lg:mt-0 lg:mb-0 lg:absolute lg:bottom-24 lg:right-24 flex flex-col items-center lg:items-end">
                <Link
                    href="https://github.com/waka320"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group cursor-pointer block transition-transform duration-300 hover:scale-110 active:scale-95"
                    aria-label="GitHubプロフィールへ"
                >
                    <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-xl animate-record-spin border-8 border-gray-900/10 dark:border-gray-100/10 group-hover:shadow-2xl">
                        <Image
                            src="/images/icon.png"
                            alt="Wakaport Icon"
                            fill
                            sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 192px"
                            className="object-cover rounded-full"
                            priority
                        />
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 lg:w-3 h-2 lg:h-3 bg-gray-900 dark:bg-gray-100 rounded-full z-10 shadow-inner"></div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 md:w-14 lg:w-24 h-12 md:h-14 lg:h-24 border border-gray-700/20 dark:border-gray-300/20 rounded-full pointer-events-none"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 md:w-10 lg:w-16 h-8 md:h-10 lg:h-16 border border-gray-700/20 dark:border-gray-300/20 rounded-full pointer-events-none"></div>

                    {/* ラベル部分 */}
                    <div className="absolute bottom-[-5px] right-[-5px] md:bottom-[-10px] md:right-[-10px] px-1.5 md:px-2 py-0.5 md:py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300 rounded-full text-[10px] md:text-xs rotate-12 transition-all duration-300 group-hover:bottom-0 group-hover:right-0">
                        #GitHub
                    </div>

                    {/* ホバー時のヒント - 初期状態では非表示 */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-600/80 dark:bg-orange-500/80 text-white px-2 md:px-4 py-1 md:py-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap z-20 text-xs md:text-sm">
                        GitHub
                    </div>
                </Link>
            </div>
        </div>
    )
}
