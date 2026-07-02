import GithubStats from "./github/GithubStats";
import GithubCalendar from "./github/GithubCalendar";
import Repository from "./github/RepositoryGrid";

export default function GithubActivity() {
    return (
        <section className="space-y-8">

            <GithubStats />

            <GithubCalendar />

            <Repository />
        </section>
    );
}
