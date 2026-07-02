export const languageColors = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    React: "#61dafb",
    HTML: "#e34c26",
    CSS: "#563d7c",
    SCSS: "#c6538c",
    PHP: "#777BB4",
    Go: "#00ADD8",
    Python: "#3572A5",
    Kotlin: "#7F52FF",
    Dart: "#00B4AB",
    Vue: "#41b883",
    Rust: "#dea584",
};

export function getLanguageColor(language) {
    return languageColors[language] || "#9CA3AF";
}