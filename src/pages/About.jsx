import About from "../components/About";
import GithubActivity from "../components/GithubActivity";

export default function Aboutpage() {
    return (
        <>
            <div className="pt-24">
                <About />
            </div>
            <div className="my-12">
                <div className="h-[2px] w-full bg-zinc-400/40 dark:via-zinc-600/40" />
            </div>

            <GithubActivity />
        </>
    );
}