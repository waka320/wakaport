"use client"; // クライアントコンポーネントとして明示的に宣言

import { ProjectProps } from '@/lib/progress/projects';
import { useEffect, useRef } from 'react';

export function Timeline({ projects }: { projects: ProjectProps[] }) {
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        const items = timelineRef.current?.querySelectorAll('.timeline-item');
        items?.forEach(item => observer.observe(item));

        return () => {
            items?.forEach(item => observer.unobserve(item));
        };
    }, [projects]);

    return (
        <div className="max-w-3xl mx-auto" ref={timelineRef}>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="timeline-item py-2 border-b border-border"
                    data-index={index}
                >
                    <div className="flex items-baseline gap-3">
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {project.start}{project.end && ` ~ ${project.end}`}
                        </span>
                        <h3 className="text-base md:text-lg font-medium">{project.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
