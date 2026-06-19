import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalRepos: 0,
        totalStars: 0,
        totalForks: 0,
        languages: 0
    });
    const { t } = useLanguage();

    const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

    useEffect(() => {
        const fetchGitHubLanguages = async () => {
            try {
                setLoading(true);

                // Tambahkan delay untuk menghindari rate limit
                await new Promise(resolve => setTimeout(resolve, 500));

                const response = await fetch(
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
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

                const repos = await response.json();

                // Hitung statistik
                const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
                const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

                // Kumpulkan semua bahasa dan hitung penggunaannya
                const languageCount = {};
                let totalBytes = 0;

                // Fetch language data untuk setiap repo
                const languagePromises = repos.map(repo =>
                    fetch(repo.languages_url).then(res => res.json())
                );

                const languagesData = await Promise.all(languagePromises);

                languagesData.forEach(repoLanguages => {
                    Object.entries(repoLanguages).forEach(([lang, bytes]) => {
                        languageCount[lang] = (languageCount[lang] || 0) + bytes;
                        totalBytes += bytes;
                    });
                });

                // Convert ke persentase dan sort
                const languagesArray = Object.entries(languageCount)
                    .map(([name, bytes]) => ({
                        name,
                        percentage: Math.round((bytes / totalBytes) * 100),
                        bytes
                    }))
                    .sort((a, b) => b.bytes - a.bytes)
                    .slice(0, 10); // Ambil top 10

                setLanguages(languagesArray);
                setStats({
                    totalRepos: repos.length,
                    totalStars,
                    totalForks,
                    languages: languagesArray.length
                });

            } catch (err) {
                console.error('Error fetching GitHub languages:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubLanguages();
    }, []);

    return (
        <section id="skills" className="p-10 bg-muted/50 rounded-2xl">
            <div className="flex gap-3 mb-20">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"></div>
            </div>
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center mb-12 animate-in">
                    <div className="inline-block mb-4">
                        <div className="w-full flex bg-green-500/30 px-6 py-1 rounded-full gap-4 items-center justify-center">
                            <div className='w-[12px] h-[12px] rounded-full bg-green-700 animate-pulse'></div>
                            <p>{t.skills.realtime}</p>
                        </div>
                    </div>
                    <h2 className="section-title mb-4">{t.skills.title}</h2>
                    <p className="section-subtitle mx-auto">
                        {t.skills.subtitle}
                    </p>
                </div>

                {loading && (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        <p className="mt-4 text-muted-foreground">{t.skills.loading}</p>
                    </div>
                )}

                {!loading && languages.length > 0 && (
                    <>
                        <div className="max-w-4xl mx-auto space-y-6 mb-16">
                            {languages.map((lang, index) => (
                                <div
                                    key={lang.name}
                                    className={`animate-in delay-${(index % 3 + 1) * 100}`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-lg font-medium">{lang.name}</span>
                                        <span className="text-sm text-muted-foreground">{lang.percentage}%</span>
                                    </div>
                                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${lang.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-in delay-400 mb-20">
                            <div className="card text-center p-6 hover:scale-105 transition-transform">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                    </svg>
                                </div>
                                <div className="text-4xl font-bold gradient-text mb-2">{stats.totalRepos}</div>
                                <div className="text-muted-foreground text-sm">{t.skills.stats.repos}</div>
                            </div>
                            <div className="card text-center p-6 hover:scale-105 transition-transform">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-yellow-500/10 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <div className="text-4xl font-bold gradient-text mb-2">{stats.totalStars}</div>
                                <div className="text-muted-foreground text-sm">{t.skills.stats.stars}</div>
                            </div>
                            <div className="card text-center p-6 hover:scale-105 transition-transform">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 013.5 6.25v-.878a2.25 2.25 0 111.5 0zM5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-3 8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                    </svg>
                                </div>
                                <div className="text-4xl font-bold gradient-text mb-2">{stats.totalForks}</div>
                                <div className="text-muted-foreground text-sm">{t.skills.stats.forks}</div>
                            </div>
                            <div className="card text-center p-6 hover:scale-105 transition-transform">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <div className="text-4xl font-bold gradient-text mb-2">{stats.languages}+</div>
                                <div className="text-muted-foreground text-sm">{t.skills.stats.languages}</div>
                            </div>
                        </div>
                    </>
                )}

                {!loading && languages.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">{t.skills.noData}</p>
                    </div>
                )}
            </div>
        </section>
    );
}
