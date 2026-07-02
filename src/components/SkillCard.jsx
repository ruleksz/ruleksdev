import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
    const Icon = skill.icon;

    return (
        <motion.div
            whileHover={{
                scale: 1.08,
                y: -3,
            }}
            whileTap={{
                scale: 0.95,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:border-white/20 hover:bg-white/10"
        >
            <Icon
                size={20}
                style={{ color: skill.color }}
            />

            <span className="text-sm font-medium">
                {skill.name}
            </span>
        </motion.div>
    );
}