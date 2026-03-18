"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function NotFound() {
  return (
    <motion.main
      role="main"
      aria-label="Page not found - 404"
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -10 }}
      className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white"
    >
      <motion.h1 variants={item} className="mb-4 text-5xl font-bold">
        404
      </motion.h1>

      <motion.p variants={item} className="mb-6 text-base sm:text-xl">
        Oops! This page does not exist.
      </motion.p>

      <motion.p
        variants={item}
        className="mb-8 max-w-md text-center text-sm text-gray-400 sm:text-base"
      >
        The route you followed may be broken, or the page may have been removed.
        Let’s get you back on track.
      </motion.p>

      <motion.div variants={item}>
        <Link
          href="/"
          aria-label="Back to home"
          className="rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          Return to Home
        </Link>
      </motion.div>
    </motion.main>
  );
}