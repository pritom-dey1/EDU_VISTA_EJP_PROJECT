"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center bg-black/80 overflow-hidden">
      
      {/* Floating Gradient Shapes */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          About EDUVISTA
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Premium courses for every skill level.
        </p>
      </motion.div>
    </section>
  );
}
