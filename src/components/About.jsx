import { useLanguage } from '../context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="p-10 bg-muted/50 rounded-2xl">
            <div className="flex gap-3 mb-20">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"></div>
            </div>
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center mb-16 animate-in">
                    <h2 className="section-title mb-4">{t.about.title}</h2>
                    <p className="section-subtitle mx-auto">
                        {t.about.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in delay-100">
                        <h3 className="text-3xl font-bold">{t.about.journey}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {t.about.journeyText}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            {t.about.journeyText2}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            {t.about.journeyText3}
                        </p>
                        <a
                            href="https://drive.google.com/file/d/1CG13a8w-OqAGzJ-gE_qxMth2zfQRUvqg/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {t.about.downloadCv || 'Download CV'}
                        </a>
                    </div>

                    <div className="space-y-4 animate-in delay-200">
                        <div className="card p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">{t.about.passion}</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {t.about.passionText}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">{t.about.passion2}</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {t.about.passionText2}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">{t.about.passion3}</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {t.about.passionText3}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
