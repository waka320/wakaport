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
        <div className="content-background mb-4">
            <h2>{title}</h2>
            <div className="flex container">
                <div className="flex-[1]">
                    <Image
                        src={imageSrc}
                        alt="プロフィール画像"
                        width={150}
                        height={150}
                        className="rounded-lg border-4 border-black"
                    />
                </div>
                <div className="flex-[2] flex flex-col justify-between">
                    <div>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="mt-2 self-start">
                        <Button href={buttonHref}>
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
