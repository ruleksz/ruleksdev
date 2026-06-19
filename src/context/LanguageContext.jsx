import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        // Navbar
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact'
        },
        // Hero
        hero: {
            welcome: 'Welcome to my portfolio',
            greeting: 'Hi, I\'m',
            title: 'Full Stack Developer & UI/UX Enthusiast',
            description: 'I create beautiful, functional, and user-friendly web applications using modern technologies. Passionate about clean code and great user experiences.',
            cta1: 'Get in Touch',
            cta2: 'View Projects'
        },
        // About
        about: {
            title: 'About Me',
            subtitle: 'Get to know more about my background and what drives me',
            journey: 'My Journey',
            journeyText: 'I started my journey in web development with a passion for creating intuitive and engaging digital experiences. Over the years, I\'ve honed my skills in both frontend and backend technologies, always staying curious and eager to learn new things.',
            journeyText2: 'My expertise lies in front-end technologies, but I also have a solid understanding of back-end development, allowing me to create full-stack applications that are both beautiful and functional.',
            journeyText3: `When I'm not coding, I enjoy learning about new technologies, contributing to open-source projects, and sharing my knowledge with the developer community.`,
            passion: 'Problem Solver',
            passion2: 'Continuous Learner',
            passion3: 'Team Player',
            passionText: 'I love tackling complex challenges and finding creative solutions',
            passionText2: 'Always staying up-to-date with the latest technologies and best practices',
            passionText3: 'Excellent collaboration and communication skills in team environments',
            approach: 'My Approach',
            approachText: 'I believe in writing clean, maintainable code and following best practices. Collaboration, continuous learning, and attention to detail are at the core of everything I do.',
            downloadCV: 'Download CV'
        },
        // Projects
        projects: {
            title: 'Featured Projects',
            subtitle: 'Live projects deployed on Vercel and other platforms',
            loading: 'Loading projects...',
            error: 'Could not load deployed projects',
            noProjects: 'No deployed projects found. Add homepage URL to your GitHub repositories.',
            featured: 'Featured',
            liveDemo: 'Live Demo',
            github: 'GitHub',
            viewAll: 'View All Repositories'
        },
        // Skills
        skills: {
            title: 'Skills & Expertise',
            subtitle: 'Programming languages from my GitHub repositories',
            realtime: 'realtime in my github',
            loading: 'Loading skills...',
            noData: 'No language data available',
            stats: {
                repos: 'Total Repositories',
                stars: 'Total Stars',
                forks: 'Total Forks',
                languages: 'Languages Used'
            }
        },
        // Contact
        contact: {
            title: 'Get In Touch',
            subtitle: 'Have a project in mind? Let\'s work together to create something amazing',
            info: 'Contact Information',
            email: 'Email',
            phone: 'Phone / WhatsApp',
            location: 'Location',
            locationText: 'Lamongan, Indonesia',
            follow: 'Follow Me',
            feedback: 'Give us feedback or collaborate with us',
            form: {
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                namePlaceholder: 'Your name',
                emailPlaceholder: 'your.email@example.com',
                subjectPlaceholder: 'What is this about?',
                messagePlaceholder: 'Your message...',
                sending: 'Sending...',
                send: 'Send Message',
                success: 'Message sent successfully! I\'ll get back to you soon.',
                error: 'Failed to send message. Please try again or contact me directly via email.'
            }
        },
        // Footer
        footer: {
            description: 'Building digital experiences that make a difference. Let\'s create something amazing together.',
            quickLinks: 'Quick Links',
            connect: 'Connect',
            rights: 'All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service'
        }
    },
    id: {
        // Navbar
        nav: {
            home: 'Beranda',
            about: 'Tentang',
            projects: 'Proyek',
            skills: 'Keahlian',
            contact: 'Kontak'
        },
        // Hero
        hero: {
            welcome: 'Selamat datang di portofolio saya',
            greeting: 'Hai, Saya',
            title: 'Full Stack Developer & UI/UX Enthusiast',
            description: 'Saya membuat aplikasi web yang indah, fungsional, dan mudah digunakan menggunakan teknologi modern. Bersemangat tentang kode yang bersih dan pengalaman pengguna yang hebat.',
            cta1: 'Hubungi Saya',
            cta2: 'Lihat Proyek'
        },
        // About
        about: {
            title: 'Tentang Saya',
            subtitle: 'Kenali lebih lanjut tentang latar belakang dan apa yang memotivasi saya',
            journey: 'Perjalanan Saya',
            journeyText: 'Saya memulai perjalanan dalam pengembangan web dengan hasrat untuk menciptakan pengalaman digital yang intuitif dan menarik. Selama bertahun-tahun, saya telah mengasah keterampilan dalam teknologi frontend dan backend, selalu penasaran dan ingin belajar hal-hal baru.',
            journeyText2: 'Keahlian saya terletak pada teknologi front-end, tetapi saya juga memiliki pemahaman yang kuat tentang pengembangan back-end, yang memungkinkan saya untuk membuat aplikasi full-stack yang indah dan fungsional.',
            journeyText3: `Saat tidak sedang melakukan pemrograman, saya senang mempelajari teknologi baru, berkontribusi pada proyek sumber terbuka, dan berbagi pengetahuan saya dengan komunitas pengembang.`,
            passion: 'Pemecah Masalah',
            passion2: 'Pembelajar Berkelanjutan',
            passion3: 'Pemain Tim',
            passionText: 'Saya senang menghadapi tantangan kompleks dan menemukan solusi kreatif.',
            passionText2: 'Selalu mengikuti perkembangan teknologi dan praktik terbaik terkini.',
            passionText3: 'Kemampuan kolaborasi dan komunikasi yang sangat baik dalam lingkungan tim.',
            approach: 'Pendekatan Saya',
            approachText: 'Saya percaya dalam menulis kode yang bersih dan mudah dipelihara serta mengikuti praktik terbaik. Kolaborasi, pembelajaran berkelanjutan, dan perhatian terhadap detail adalah inti dari semua yang saya lakukan.',
            downloadCV: 'Unduh CV'
        },
        // Projects
        projects: {
            title: 'Proyek Unggulan',
            subtitle: 'Proyek live yang di-deploy di Vercel dan platform lainnya',
            loading: 'Memuat proyek...',
            error: 'Tidak dapat memuat proyek yang di-deploy',
            noProjects: 'Tidak ada proyek yang di-deploy. Tambahkan URL homepage ke repositori GitHub Anda.',
            featured: 'Unggulan',
            liveDemo: 'Demo Live',
            github: 'GitHub',
            viewAll: 'Lihat Semua Repositori'
        },
        // Skills
        skills: {
            title: 'Keahlian & Expertise',
            subtitle: 'Bahasa pemrograman dari repositori GitHub saya',
            realtime: 'realtime dari github saya',
            loading: 'Memuat keahlian...',
            noData: 'Tidak ada data bahasa tersedia',
            stats: {
                repos: 'Total Repositori',
                stars: 'Total Bintang',
                forks: 'Total Fork',
                languages: 'Bahasa Digunakan'
            }
        },
        // Contact
        contact: {
            title: 'Hubungi Saya',
            subtitle: 'Punya proyek dalam pikiran? Mari bekerja sama untuk menciptakan sesuatu yang luar biasa',
            info: 'Informasi Kontak',
            email: 'Email',
            phone: 'Telepon / WhatsApp',
            location: 'Lokasi',
            locationText: 'Lamongan, Indonesia',
            follow: 'Ikuti Saya',
            feedback: 'Berikan kami feedback atau berkolaborasi dengan kami',
            form: {
                name: 'Nama',
                email: 'Email',
                subject: 'Subjek',
                message: 'Pesan',
                namePlaceholder: 'Nama Anda',
                emailPlaceholder: 'email.anda@example.com',
                subjectPlaceholder: 'Tentang apa ini?',
                messagePlaceholder: 'Pesan Anda...',
                sending: 'Mengirim...',
                send: 'Kirim Pesan',
                success: 'Pesan berhasil dikirim! Saya akan segera menghubungi Anda.',
                error: 'Gagal mengirim pesan. Silakan coba lagi atau hubungi saya langsung melalui email.'
            }
        },
        // Footer
        footer: {
            description: 'Membangun pengalaman digital yang membuat perbedaan. Mari ciptakan sesuatu yang luar biasa bersama.',
            quickLinks: 'Tautan Cepat',
            connect: 'Terhubung',
            rights: 'Hak cipta dilindungi.',
            privacy: 'Kebijakan Privasi',
            terms: 'Syarat Layanan'
        }
    }
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'id' : 'en');
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}
