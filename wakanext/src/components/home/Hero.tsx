import { ThemeSwitcher } from "./ThemeSwitcher"
export default function Hero() {
    return (
        <div className="flex container min-h-[100svh] items-start">
            <div className="flex-[3] flex">
                <div className="mt-32 mx-3 p-4 border-4 hero">
                    <h1 className="text-5xl font-bold">welcome to <br /><span className="text-9xl">Wakaport.</span></h1>
                </div>
            </div>
            <div className="flex-[2]"><ThemeSwitcher /></div>
        </div>
    )
}
