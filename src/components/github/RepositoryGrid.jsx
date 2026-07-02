import useGithub from "../../hooks/useGithub";
import RepositoryCard from "./RepositoryCard";

export default function RepositoryGrid() {

    const {
        featuredRepositories,
        loading,
        error,
    } = useGithub();

    if (loading) {
        return (
            <div className="grid gap-6 md:grid-cols-2">

                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-52 animate-pulse rounded-3xl bg-muted"
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

            <div className="mb-8">

                <h2 className="text-3xl font-bold">
                    Featured Repositories
                </h2>

                <p className="mt-2 text-muted-foreground">
                    Beberapa repository yang paling sering saya gunakan.
                </p>

            </div>

            <div className="grid gap-6 lg:grid-cols-2">

                {featuredRepositories.map((repo) => (
                    <RepositoryCard
                        key={repo.id}
                        repo={repo}
                    />
                ))}

            </div>

        </section>
    );
}