export default function Hero() {
    return (
        <div className="flex container min-h-[100svh] items-start relative">
            <div className="flex-[3] flex">
                <div className="mt-32 mx-3 p-6 border-4 border-gray-800 dark:border-gray-200 hero shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-sm">
                    <h1 className="text-5xl font-bold border-none">welcome to <br />
                        <span className="text-9xl relative">
                            Wakaport<span className="text-orange-500 dark:text-orange-400 animate-pulse-dot">.</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-1.5 bg-orange-500 animate-expand"></span>
                        </span>
                    </h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 font-light">my Portal and Portfolio.</p>
                </div>
            </div>

            <div className="absolute bottom-24 right-24 flex flex-col items-end">
                <a
                    href="https://github.com/waka320"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group cursor-pointer block transition-transform duration-300 hover:scale-110 active:scale-95"
                    aria-label="GitHubプロフィールへ"
                >
                    <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl animate-record-spin border-8 border-gray-900/10 dark:border-gray-100/10 group-hover:shadow-2xl">
                        <img
                            src="/images/icon.png"
                            alt="Wakaport Icon"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 dark:bg-gray-100 rounded-full z-10 shadow-inner"></div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-gray-700/20 dark:border-gray-300/20 rounded-full pointer-events-none"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-gray-700/20 dark:border-gray-300/20 rounded-full pointer-events-none"></div>

                    {/* ラベル部分 */}
                    <div className="absolute bottom-[-10px] right-[-10px] px-2 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300 rounded-full text-xs rotate-12 transition-all duration-300 group-hover:bottom-[-5px] group-hover:right-[-5px]">
                        #GitHub
                    </div>

                    {/* ホバー時のヒント - 初期状態では非表示 */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-600/80 dark:bg-orange-500/80 text-white px-4 py-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap z-20">
                        GitHub
                    </div>
                </a>
            </div>
        </div>
    )
}
