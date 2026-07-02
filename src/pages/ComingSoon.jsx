import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Clock3, Sparkles } from "lucide-react";

export default function ComingSoon() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">

            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

                <div className="absolute right-20 top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-[100px]" />

                <div className="absolute bottom-20 left-20 h-52 w-52 rounded-full bg-yellow-400/10 blur-[120px]" />

            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .6 }}
                className="relative z-10 max-w-2xl text-center"
            >

                {/* Icon */}

                <motion.div
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                    }}
                    className="mb-8 flex justify-center"
                >
                    <div className="rounded-full border border-border bg-card p-6 shadow-xl">

                        <Clock3 className="h-14 w-14 text-primary" />

                    </div>
                </motion.div>

                {/* Badge */}

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">

                    <Sparkles className="h-4 w-4" />

                    New Feature

                </div>

                <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">

                    Coming Soon

                </h1>

                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">

                    Halaman ini sedang dalam proses pengembangan.
                    Nantikan fitur dan pembaruan terbaru dalam waktu dekat.

                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">

                    <Link
                        to="/"
                        className="
                        rounded-xl
                        bg-primary
                        px-6
                        py-3
                        font-semibold
                        text-primary-foreground
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:shadow-xl
                    "
                    >
                        <span className="flex items-center gap-2">

                            <Home className="h-5 w-5" />

                            Kembali ke Home

                        </span>

                    </Link>

                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .8 }}
                    className="mt-16 text-sm text-muted-foreground"
                >
                    🚀 RulekszDev Portfolio • Under Development
                </motion.div>

            </motion.div>

        </section>
    );
}