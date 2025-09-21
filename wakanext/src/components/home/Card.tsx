import { Button } from '@/components/ui/Button';

type CardProps = {
    title: string;
    paragraphs: string[];
    buttonText: string;
    buttonHref: string;
};

export const Card = ({ title, paragraphs, buttonText, buttonHref }: CardProps) => {
    return (
        <div className="content-background mb-2 p-3 transition-all">
            <h2 className="text-lg md:text-xl mb-2">{title}</h2>
            <div className="mb-2">
                {paragraphs.slice(0, 1).map((paragraph, index) => (
                    <p key={index} className="text-sm md:text-base">{paragraph}</p>
                ))}
            </div>
            <Button href={buttonHref} withArrow className="text-sm">{buttonText}</Button>
        </div>
    );
};
