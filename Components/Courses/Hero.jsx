"use client";

import { motion } from "framer-motion";

export default function AllCoursesHero() {
  return (
    <section className="relative w-full pt-10 h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Animated Grid Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20 pointer-events-none"
      />

      {/* Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
        >
          All <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Premium Courses
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="text-gray-300 max-w-xl mx-auto mt-6 text-lg md:text-xl"
        >
          Learn from the best — Explore our full collection of expert-crafted courses.
        </motion.p>

        {/* Bottom Floating Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white rounded-xl font-semibold shadow-xl hover:opacity-90 transition">
            Start Learning
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-12 right-20 w-4 h-4 bg-purple-400/50 rounded-full blur-md"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-16 left-24 w-3 h-3 bg-pink-400/50 rounded-full blur-md"
      />
    </section>
  );
}
