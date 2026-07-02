const CACHE_KEY = "github-cache";
const CACHE_TIME = 1000 * 60 * 30; // 30 menit

export function saveGithubCache(data) {
    localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
            timestamp: Date.now(),
            data,
        })
    );
}

export function getGithubCache() {
    const cache = localStorage.getItem(CACHE_KEY);

    if (!cache) return null;

    try {
        const parsed = JSON.parse(cache);

        const expired =
            Date.now() - parsed.timestamp > CACHE_TIME;

        if (expired) return null;

        return parsed.data;
    } catch {
        return null;
    }
}