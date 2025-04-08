import Image from 'next/image';
import { Button } from '@/components/ui/Button';

type CardProps = {
    imageSrc: string;
    title: string;
    paragraphs: string[];
    buttonText: string;
    buttonHref: string;
};

export const Card = ({ imageSrc, title, paragraphs, buttonText, buttonHref }: CardProps) => {
    return (
        <div className="content-background mb-4 p-4 md:flex transition-all duration-300 hover:shadow-lg">
            <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
                <div className="relative h-48 md:h-full w-full rounded-lg overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="md:w-2/3">
                <h2 className="text-xl md:text-2xl mb-4 text-[var(--foreground)]">{title}</h2>
                <div className="mb-4">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="mb-2 text-[var(--foreground)]">
                            {paragraph}
                        </p>
                    ))}
                </div>
                <Button href={buttonHref} withArrow>{buttonText}</Button>
            </div>
        </div>
    );
};
