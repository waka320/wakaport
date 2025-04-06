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
                        <Button href={buttonHref}>
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
