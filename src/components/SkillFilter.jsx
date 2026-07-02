import { motion } from "framer-motion";

export default function SkillFilter({
    categories,
    active,
    onChange,
    count,
}) {
    return (
        <div className="flex flex-wrap gap-3">
            {categories.map((item) => (
                <motion.button
                    key={item}
                    onClick={() => onChange(item)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    layout
                    transition={{ duration: 0.2 }}
                    className={`rounded-full px-5 py-2 text-sm transition
                            ${active === item
                            ? "bg-sky-500 text-black"
                            : "border border-white/10 bg-white/5 hover:bg-white/10"
                        }`}
                >
                    {item}

                    <span className="ml-2 rounded-full bg-black/20 px-2 py-1 text-xs">
                        {count(item)}
                    </span>
                </motion.button>
            ))}
        </div>
    );
}