import { Link } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">

            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                className="relative z-10 mx-auto max-w-2xl text-center"
            >

                <motion.div
                    animate={{
                        rotate: [0, -8, 8, -8, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                    }}
                    className="mb-8 flex justify-center"
                >
                    <SearchX className="h-24 w-24 text-primary" />
                </motion.div>

                <h1 className="text-8xl font-black tracking-tight text-primary">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold text-foreground">
                    Halaman Tidak Ditemukan
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
                    Maaf, halaman yang kamu cari tidak tersedia,
                    telah dipindahkan, atau URL yang dimasukkan salah.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                    <Link
                        to="/"
                        className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-primary
                        px-6
                        py-3
                        font-medium
                        text-primary-foreground
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:shadow-xl
                    "
                    >
                        <Home className="h-5 w-5" />
                        Kembali ke Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-border
                        bg-card
                        px-6
                        py-3
                        font-medium
                        transition-all
                        duration-300
                        hover:bg-accent
                    "
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Halaman Sebelumnya
                    </button>

                </div>

            </motion.div>

        </section>
    );
}