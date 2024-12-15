import '@/styles/timeline.scss';  
type ProjectProps = {
    title: string;
    description: string;
    technologies: string[];
    date: string;
};
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
                                {project.date}
                            </span>
                        </div>

                        <p className="timeline-description">
                            {project.description}
                        </p>

                        <div className="timeline-technologies">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="timeline-tech"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
