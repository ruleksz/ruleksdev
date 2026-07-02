import * as Icons from "lucide-react";
import useGithub from "../../hooks/useGithub";
import StatCard from "./StatCard";
console.log(Icons);

export default function GithubStats() {

    const {
        profile,
        stats,
        loading,
        error,
    } = useGithub();

    if (loading) {
        return (
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">

                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-36 animate-pulse rounded-2xl bg-muted"
                    />
                ))}

            </div>
        );
    }

    {
        error === "cached" && (
            <div className="mb-5 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-yellow-400">
                GitHub sedang membatasi request. Menampilkan data yang tersimpan sebelumnya.
            </div>
        )
    }

    return (

        <section>

            <div className="mb-8 text-left">

                <h2 className="lg:text-3xl text-sm font-bold">
                    GitHub Activity
                </h2>

                <p className="mt-2 text-muted-foreground">
                    Statistik GitHub secara realtime.
                </p>

            </div>

            <div className="grid gap-3">
                <div className="grid grid-cols-3 gap-2">
                    <StatCard
                        title="Followers"
                        value={profile?.followers ?? 99}
                        icon={Icons.Users}
                    />

                    <StatCard
                        title="Following"
                        value={profile?.following ?? 99}
                        icon={Icons.Users}
                    />

                    <StatCard
                        title="Repository"
                        value={profile?.public_repos ?? 99}
                        icon={Icons.Book}
                    />
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-2">
                    <StatCard
                        title="Stars"
                        value={stats?.totalStars ?? 99}
                        icon={Icons.Star}
                    />

                    <StatCard
                        title="Forks"
                        value={stats?.totalForks ?? 99}
                        icon={Icons.GitFork}
                    />

                    <StatCard
                        title="Languages"
                        value={Object.keys(stats?.languages ?? {}).length}
                        icon={Icons.Languages}
                    />
                    <StatCard
                        title="Average"
                        value={1}
                        suffix="/day"
                    />
                </div>


            </div>

        </section>

    );
}