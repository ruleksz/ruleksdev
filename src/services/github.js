import axios from "axios";

const USERNAME = "ruleksz";

const api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Accept: "application/vnd.github+json",
    },
});

const GITHUB_GRAPHQL = "https://api.github.com/graphql";

async function graphQL(query) {
    const response = await fetch(GITHUB_GRAPHQL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch GitHub GraphQL");
    }

    const json = await response.json();

    if (json.errors) {
        throw new Error(json.errors[0].message);
    }

    return json.data;
}

/**
 * Profile
 */
export async function getProfile() {
    const { data } = await api.get(`/users/${USERNAME}`);

    return data;
}

/**
 * Repository
 */
export async function getRepositories() {
    const { data } = await api.get(
        `/users/${USERNAME}/repos`,
        {
            params: {
                per_page: 100,
                sort: "updated",
            },
        }
    );

    return data.filter((repo) => !repo.fork);
}

/**
 * Repository Stats
 */
export async function getRepositoryStats() {
    const repos = await getRepositories();

    const languages = {};

    let totalStars = 0;
    let totalForks = 0;

    repos.forEach((repo) => {
        totalStars += repo.stargazers_count;
        totalForks += repo.forks_count;

        if (repo.language) {
            languages[repo.language] =
                (languages[repo.language] || 0) + 1;
        }
    });

    return {
        totalRepos: repos.length,
        totalStars,
        totalForks,
        languages,
    };
}

/**
 * Top Languages
 */
export async function getTopLanguages() {
    const repos = await getRepositories();

    const map = {};

    repos.forEach((repo) => {
        if (!repo.language) return;

        map[repo.language] =
            (map[repo.language] || 0) + 1;
    });

    return Object.entries(map)
        .sort((a, b) => b[1] - a[1])
        .map(([language, count]) => ({
            language,
            count,
        }));
}

/**
 * Featured Repository (Pinned)
 */
export async function getFeaturedRepositories() {
    const data = await graphQL(`
    query {
      user(login: "${USERNAME}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              homepageUrl
              stargazerCount
              forkCount
              updatedAt
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  `);

    return data.user.pinnedItems.nodes.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.url,
        homepage: repo.homepageUrl,
        stargazers_count: repo.stargazerCount,
        forks_count: repo.forkCount,
        updated_at: repo.updatedAt,
        language: repo.primaryLanguage?.name ?? null,
        languageColor: repo.primaryLanguage?.color ?? "#999999",
    }));
}

/**
 * All Github Data
 */
export async function getGithubData() {
    const [profile, repos, stats] = await Promise.all([
        getProfile(),
        getRepositories(),
        getRepositoryStats(),
    ]);

    return {
        profile,
        repos,
        stats,
    };
}