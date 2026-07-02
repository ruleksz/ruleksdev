import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { getLanguageColor } from "./LanguageColor";

export default function RepositoryCard({ repo }) {
    return (
        <motion.a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
                y: -5,
            }}
            className="
      group
      relative
      flex
      flex-col
      rounded-3xl
      border
      border-border
      bg-card
      p-6
      transition-all
      duration-300
      hover:border-primary/30
      hover:shadow-xl
    "
        >
            <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-yellow-400/5 via-transparent to-cyan-400/5" />

            <div className="relative z-10">

                <div className="flex items-start justify-between">

                    <h3 className="text-xl font-bold">
                        {repo.name}
                    </h3>

                    <ExternalLink
                        className="
            h-5
            w-5
            text-muted-foreground
            opacity-0
            transition
            group-hover:opacity-100
          "
                    />

                </div>

                <p className="mt-4 line-clamp-3 leading-7 text-muted-foreground">
                    {repo.description || "No description."}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-5">

                    {repo.language && (
                        <div className="flex items-center gap-2">

                            <span
                                className="h-3 w-3 rounded-full"
                                style={{
                                    background: getLanguageColor(repo.language),
                                }}
                            />

                            <span>{repo.language}</span>

                        </div>
                    )}

                    <div className="flex items-center gap-1">

                        <Star className="h-4 w-4" />

                        {repo.stargazers_count}

                    </div>

                    <div className="flex items-center gap-1">

                        <GitFork className="h-4 w-4" />

                        {repo.forks_count}

                    </div>

                </div>

            </div>
        </motion.a>
    );
}