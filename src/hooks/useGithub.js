import { useCallback, useEffect, useState } from "react";
import {
    getGithubCache,
    saveGithubCache,
} from "../utils/githubCache";
import {
    getGithubData,
    getFeaturedRepositories,
    getTopLanguages,
} from "../services/github";

export default function useGithub() {
    const [profile, setProfile] = useState(null);
    const [repositories, setRepositories] = useState([]);
    const [featuredRepositories, setFeaturedRepositories] = useState([]);
    const [stats, setStats] = useState(null);
    const [languages, setLanguages] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchGithub = useCallback(async () => {
        try {
            setLoading(true);

            const github = await getGithubData();

            setProfile(github.profile);
            setRepositories(github.repos);
            setStats(github.stats);

            const featured = await getFeaturedRepositories();
            setFeaturedRepositories(featured);

            const languages = await getTopLanguages();
            setLanguages(languages);

            // simpan cache
            saveGithubCache({
                profile: github.profile,
                repositories: github.repos,
                stats: github.stats,
                featuredRepositories: featured,
                languages,
            });

            setError(null);

        } catch (err) {

            console.warn("Github API Error", err);

            const cache = getGithubCache();

            if (cache) {

                setProfile(cache.profile);
                setRepositories(cache.repositories);
                setStats(cache.stats);
                setFeaturedRepositories(cache.featuredRepositories);
                setLanguages(cache.languages);

                setError("cached");

            } else {

                setError(err.message);

            }

        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchGithub();
    }, [fetchGithub]);

    return {
        profile,
        repositories,
        featuredRepositories,
        stats,
        languages,

        loading,
        error,

        refetch: fetchGithub,
    };
}