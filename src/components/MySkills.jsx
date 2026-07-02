import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skills } from "../data/skills";
import SkillCard from "./SkillCard";
import SkillFilter from "./SkillFilter";

export default function MySkills() {
    const [active, setActive] = useState("Semua");

    const categories = [
        "Semua",
        "Frontend",
        "Backend",
        "Mobile",
        "Database",
        "Tools",
    ];

    const filtered = useMemo(() => {
        if (active === "Semua") return skills;

        return skills.filter((s) => s.category === active);
    }, [active]);

    const count = (category) => {
        if (category === "Semua") return skills.length;

        return skills.filter((s) => s.category === category).length;
    };

    return (
        <section className="rounded-3xl border border-white/10 bg-muted/30 p-8 mt-12">

            <h2 className="mb-2 text-3xl font-bold">
                Keahlian
            </h2>

            <p className="mb-8 text-zinc-400">
                Keahlian profesional saya.
            </p>

            <SkillFilter
                categories={categories}
                active={active}
                onChange={setActive}
                count={count}
            />

            <div className="mt-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                            duration: 0.35,
                            ease: "easeInOut",
                        }}
                        className="flex flex-wrap gap-4"
                    >
                        {filtered.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.8,
                                    y: -20,
                                }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.03,
                                }}
                                layout
                            >
                                <SkillCard skill={skill} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}