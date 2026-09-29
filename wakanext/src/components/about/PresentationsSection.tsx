import React from 'react';
import Link from 'next/link';
import { presentations } from '@/lib/about/presentations';

const PresentationsSection = () => {
    return (
        <section className="content-background pixel-panel mb-4 p-4 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">{presentations.title}</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2">
                {presentations.items.map((item, index) => (
                    <li key={index} className="text-sm md:text-base">
                        {item.text}
                        {item.links.length > 0 && (
                            <span>
                                {' '}（{item.links.map((link, i) => (
                                    <span key={link.url}>
                                        {i > 0 && '／'}
                                        <Link
                                            className="text-[var(--link-color)] hover:text-[var(--accent)] underline"
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.label}
                                        </Link>
                                    </span>
                                ))}）
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default PresentationsSection;
