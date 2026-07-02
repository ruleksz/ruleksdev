import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
    const { theme, toggleTheme, mounted } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { to: "/", label: t.nav.home },
        { to: "/about", label: t.nav.about },
        { to: "/projects", label: t.nav.projects },
        { to: "/skills", label: t.nav.skills },
        { to: "/contact", label: t.nav.contact },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mounted) {
        return (
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-xl border-b border-border">
                <div className="container-custom">
                    <div className="flex h-16 items-center justify-between">
                        <div className="text-xl font-bold gradient-text">RuleksDev</div>
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm' : 'bg-background/80 backdrop-blur-md'
            }`}>
            <div className="container-custom">
                <div className="flex h-16 items-center justify-between">
                    <NavLink
                        to="/"
                        className="text-xl font-bold gradient-text"
                    >
                        Ruleksz<span className="text-foreground">Dev</span>
                    </NavLink>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors ${isActive
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus:outline-none focus:ring-offset-2"
                            aria-label="Toggle language"
                        >
                            <span className="text-sm font-semibold">
                                {language === 'en' ? '🇮🇩 ID' : 'us EN'}
                            </span>
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus:outline-none focus:ring-offset-2"
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {theme === 'dark' ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>

                        <button
                            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-background border-t border-border animate-slide-down">
                    <div className="container-custom py-4 space-y-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block rounded-lg px-4 py-2 text-base font-medium transition-colors ${isActive
                                        ? "bg-accent text-foreground"
                                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}