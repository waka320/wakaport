import Image from "next/image";
import { Button } from "../ui/Button";

type CardProps = {
    imageSrc: string;
    title: string;
    paragraphs: string[];
    buttonText: string;
    buttonHref: string;
};

export function Card({
    imageSrc,
    title,
    paragraphs,
    buttonText,
    buttonHref
}: CardProps) {
    return (
        <div className="content-background mb-4 p-4">
            <h2 className="text-xl md:text-2xl">{title}</h2>
            <div className="flex flex-col md:flex-row gap-4 container mt-4">
                <div className="flex-none md:flex-[1] flex justify-center">
                    <Image
                        src={imageSrc}
                        alt="プロフィール画像"
                        width={150}
                        height={150}
                        className="rounded-lg border-4 border-black w-32 h-32 md:w-auto md:h-auto object-cover"
                    />
                </div>
                <div className="flex-auto md:flex-[2] flex flex-col justify-between">
                    <div>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="mb-2 text-sm md:text-base">{paragraph}</p>
                        ))}
                    </div>
                    <div className="mt-4 self-start">
                        <Button
                            href={buttonHref}
                            className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-500 text-white text-sm font-medium rounded-md transition-colors duration-300 group shadow-sm"
                        >
                            {buttonText}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
