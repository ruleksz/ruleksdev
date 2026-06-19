import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Collaborative task management tool with real-time updates, team collaboration features, and advanced filtering.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        technologies: ["React", "Firebase", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Real-time weather application with forecasts, interactive maps, and location-based weather alerts.",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
        technologies: ["React", "OpenWeather API", "Chart.js"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false
    },
    {
        id: 4,
        title: "Portfolio CMS",
        description: "Content management system for portfolio websites with drag-and-drop builder and template customization.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        technologies: ["Next.js", "PostgreSQL", "Prisma"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false
    },
    {
        id: 5,
        title: "Social Media Analytics",
        description: "Analytics dashboard for social media metrics with data visualization and performance insights.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        technologies: ["Vue.js", "D3.js", "Express"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false
    },
    {
        id: 6,
        title: "Fitness Tracker",
        description: "Mobile-first fitness tracking app with workout plans, progress tracking, and nutrition logging.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
        technologies: ["React Native", "Redux", "Firebase"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false
    }
];

export default function Projects() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { t } = useLanguage();

    // Ganti dengan username GitHub Anda
    const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

    useEffect(() => {
        const fetchGitHubRepos = async () => {
            try {
                setLoading(true);

                // Tambahkan delay untuk menghindari rate limit
                await new Promise(resolve => setTimeout(resolve, 1000));

                const response = await fetch(
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
                    {
                        headers: {
                            'Accept': 'application/vnd.github.v3+json',
                            'Authorization': `Bearer ${GITHUB_TOKEN}`
                        }
                    }
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }

                const data = await response.json();

                // Filter hanya repo yang sudah di-deploy (memiliki homepage URL)
                const deployedRepos = data.filter(repo =>
                    repo.homepage &&
                    repo.homepage.trim() !== '' &&
                    (repo.homepage.includes('vercel.app') ||
                        repo.homepage.includes('netlify.app') ||
                        repo.homepage.includes('github.io') ||
                        repo.homepage.startsWith('http'))
                );

                // Transform GitHub data ke format yang sesuai
                const transformedRepos = deployedRepos.map((repo, index) => ({
                    id: repo.id,
                    title: repo.name.split('-').map(word =>
                        word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' '),
                    description: repo.description || 'No description available',
                    image: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
                    technologies: repo.language ? [repo.language] : ['Code'],
                    liveUrl: repo.homepage,
                    githubUrl: repo.html_url,
                    featured: index < 2,
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                    isDeployed: true
                }));

                setRepos(transformedRepos);
                setError(null);
            } catch (err) {
                console.error('Error fetching GitHub repos:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubRepos();
    }, []);

    return (
        <section id="projects" className="section-padding">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center mb-16 animate-in">
                    <h2 className="section-title mb-4">{t.projects.title}</h2>
                    <p className="section-subtitle mx-auto">
                        {t.projects.subtitle}
                    </p>
                </div>

                {loading && (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        <p className="mt-4 text-muted-foreground">{t.projects.loading}</p>
                    </div>
                )}

                {error && !loading && (
                    <div className="text-center py-8 text-muted-foreground">
                        {t.projects.error}
                    </div>
                )}

                {!loading && !error && repos.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">{t.projects.noProjects}</p>
                    </div>
                )}

                {!loading && repos.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {repos.map((project, index) => (
                            <div
                                key={project.id}
                                className={`card card-hover animate-in delay-${(index % 3 + 1) * 100}`}
                            >
                                <div className="relative overflow-hidden">
                                    <div className="absolute flex gap-2 top-2 left-2">
                                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"></div>
                                        <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center"></div>
                                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"></div>
                                    </div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                    {project.featured && (
                                        <span className="absolute top-4 right-4 badge badge-primary">
                                            {t.projects.featured}
                                        </span>
                                    )}
                                </div>
                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="badge badge-secondary text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {(project.stars > 0 || project.forks > 0) && (
                                        <div className="flex gap-4 text-sm text-muted-foreground">
                                            {project.stars > 0 && (
                                                <span className="flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    {project.stars}
                                                </span>
                                            )}
                                            {project.forks > 0 && (
                                                <span className="flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 013.5 6.25v-.878a2.25 2.25 0 111.5 0zM5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-3 8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                                    </svg>
                                                    {project.forks}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                    <div className="flex gap-3 pt-2">
                                        <a
                                            href={project.liveUrl}
                                            className="flex-1 btn-primary text-center text-sm py-2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                {t.projects.liveDemo}
                                            </span>
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            className="flex-1 btn-secondary text-center text-sm py-2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                                GitHub
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!loading && repos.length > 0 && (
                    <div className="text-center mt-16">
                        <a
                            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            {t.projects.viewAll}
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
