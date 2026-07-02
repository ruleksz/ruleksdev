import Hero from "../components/Hero";
import Skills from "../components/MySkills";

export default function Home() {
    return (
        <>
            <Hero />

            <div className="h-[2px] w-full bg-zinc-400/40 dark:via-zinc-600/40" />
            <Skills />
            <div className="my-12">
                <div className="h-[2px] w-full bg-zinc-400/40 dark:via-zinc-600/40" />
            </div>
            <div className="text-left">
                <p className="text-gray-500">Tidak ada konten lagi....</p>
            </div>

        </>
    );
}