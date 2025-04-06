export default function Hero() {
    return (
        <div className="flex container min-h-[100svh] items-start">
            <div className="flex-[3] flex">
                <div className="mt-32 mx-3 p-6 border-4 border-gray-800 dark:border-gray-200 hero shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-sm">
                    <h1 className="text-5xl font-bold border-none">welcome to <br />
                        <span className="text-9xl relative">
                            Wakaport<span className="text-indigo-600 dark:text-indigo-400 animate-pulse-dot">.</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-1.5 bg-indigo-500 animate-expand"></span>
                        </span>
                    </h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 font-light">my Portal and Portfolio.</p>
                </div>
            </div>
        </div>
    )
}
