import '@/styles/timeline.scss';
import { ProjectProps } from '@/lib/progress/projects';

export function Timeline({ projects }: { projects: ProjectProps[] }) {
    return (
        <div className="timeline">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="timeline-item"
                >
                    <div className="timeline-dot"></div>

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
                    </div>
                </div>
            ))}
        </div>
    );
}
