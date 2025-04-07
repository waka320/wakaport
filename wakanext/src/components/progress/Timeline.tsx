import '@/styles/timeline.scss';
import { ProjectProps } from '@/lib/progress/projects';
import { useEffect, useRef } from 'react';

// タグの色を定義
const TAG_COLORS: Record<string, { bg: string, text: string }> = {
    '技術開発': { bg: '#e1f5fe', text: '#0277bd' },
    '自分史': { bg: '#f3e5f5', text: '#7b1fa2' },
    '学校': { bg: '#e8f5e9', text: '#2e7d32' },
};

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
        <div className="timeline" ref={timelineRef}>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="timeline-item"
                    data-index={index}
                >
                    <div className="timeline-dot">
                        <div className="timeline-dot-inner"></div>
                    </div>

                    <div className="timeline-content">
                        <div className="timeline-header">
                            <h2 className="timeline-title">
                                {project.title}
                            </h2>
                            <span className="timeline-date">
                                {project.start}{project.end && ` ~ ${project.end}`}
                            </span>
                        </div>

                        <p className="timeline-description">
                            {project.description}
                        </p>

                        <div className="timeline-tags">
                            {project.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="timeline-tag"
                                    style={{
                                        backgroundColor: TAG_COLORS[tag]?.bg || '#f0f0f0',
                                        color: TAG_COLORS[tag]?.text || '#333'
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
