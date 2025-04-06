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
        <div className="content-background mb-4 p-4 transition-all duration-300 hover:shadow-lg">
            <h2 className="text-xl md:text-2xl mb-2">{title}</h2>
            <div className="flex flex-col md:flex-row gap-4 container mt-4">
                <div className="flex-none md:flex-[1] flex justify-center">
                    <div className="overflow-hidden rounded-lg border-4 border-black">
                        <Image
                            src={imageSrc}
                            alt="プロフィール画像"
                            width={150}
                            height={150}
                            className="w-32 h-32 md:w-auto md:h-auto object-cover transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                </div>
                <div className="flex-auto md:flex-[2] flex flex-col justify-between">
                    <div>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="mb-2 text-sm md:text-base leading-relaxed">{paragraph}</p>
                        ))}
                    </div>
                    <div className="mt-4 self-start">
                        <Button href={buttonHref} className="group">
                            {buttonText}
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4 w-4 ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1" 
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
