import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function GithubCalendar() {
    const { theme } = useTheme();

    const darkTheme = {
        light: [
            "#161b22",
            "#0e4429",
            "#006d32",
            "#26a641",
            "#39d353",
        ],
        dark: [
            "#161b22",
            "#0e4429",
            "#006d32",
            "#26a641",
            "#39d353",
        ],
    };

    const lightTheme = {
        light: [
            "#ebedf0",
            "#9be9a8",
            "#40c463",
            "#30a14e",
            "#216e39",
        ],
        dark: [
            "#ebedf0",
            "#9be9a8",
            "#40c463",
            "#30a14e",
            "#216e39",
        ],
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            className="
      rounded-3xl
      border
      border-border
      bg-card
      p-8
      shadow-sm
    "
        >
            <div className="mb-8 flex items-center gap-3">

                <FolderGit2 className="h-6 w-6 text-primary" />

                <div>
                    <h2 className="text-2xl font-bold">
                        Contribution Graph
                    </h2>

                    <p className="text-muted-foreground">
                        GitHub activity over the last year.
                    </p>
                </div>

            </div>

            <div className="overflow-x-auto">

                <GitHubCalendar
                    username="ruleksz"
                    blockSize={15}
                    blockMargin={5}
                    fontSize={14}
                    colorScheme={theme}
                    theme={theme === "dark" ? darkTheme : lightTheme}
                />

            </div>
        </motion.section>
    );
}