import { motion } from "framer-motion";
import { useRef } from "react";

export default function StatCard({
    title,
    value,
    icon: Icon,
    suffix = "",
}) {
    const cardRef = useRef(null);

    const handleMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();

        cardRef.current.style.setProperty(
            "--x",
            `${e.clientX - rect.left}px`
        );

        cardRef.current.style.setProperty(
            "--y",
            `${e.clientY - rect.top}px`
        );
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMove}
            whileHover={{
                y: -6,
            }}
            className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-border
            bg-card
            p-6
            transition-all
            duration-300
        "
        >
            {/* Glow */}
            <div
                className="
                pointer-events-none
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
            "
                style={{
                    background:
                        "radial-gradient(220px circle at var(--x) var(--y), rgba(250,204,21,.18), transparent 70%)",
                }}
            />

            {/* Border Glow */}
            <div
                className="
                absolute
                inset-0
                rounded-3xl
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
            "
                style={{
                    background:
                        "radial-gradient(180px circle at var(--x) var(--y), rgba(250,204,21,.35), transparent 60%)",
                    mask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                }}
            />

            <div className="relative z-10">

                {Icon && (
                    <Icon className="mb-2 h-6 w-6 text-sky-600" />
                )}

                <p className="text-center text-muted-foreground">
                    {title}
                </p>

                <h1 className="mt-3 text-center gradient-text">
                    {value}
                    <span className="text-xl">{suffix}</span>
                </h1>

            </div>
        </motion.div>
    );
}