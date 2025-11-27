"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Master Your Skills With
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Premium Courses
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-md">
            Learn from expert instructors & level up your career with high‑quality courses, projects, and certifications.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
              Explore Courses
            </button>
            <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold shadow-lg hover:bg-gray-200 transition">
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-2xl overflow-hidden shadow-[0_0_80px_-10px_rgba(255,0,200,0.5)]">
            <Image
              src="/courses.webp"
              alt="Learning Illustration"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
