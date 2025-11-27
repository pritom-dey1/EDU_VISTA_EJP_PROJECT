"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Interactive Projects",
    desc: "Hands-on projects with real-world briefs that build your portfolio and skills.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="url(#g1)" strokeWidth="1.5" />
        <path d="M7 20h10" stroke="url(#g1)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#F472B6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Expert Instructors",
    desc: "Learn from industry pros — bite-sized lessons and deep workshops.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="3" stroke="url(#g2)" strokeWidth="1.5" />
        <path d="M4 20c1.5-3 4.5-5 8-5s6.5 2 8 5" stroke="url(#g2)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#F472B6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Certifications",
    desc: "Get recognized certificates to showcase on your resume and LinkedIn.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v6l3 3" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" stroke="url(#g3)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="g3" x1="0" x2="1">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#F472B6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Career Support",
    desc: "Resume reviews, mock interviews, and job placement guidance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h5l2 3 4-6 7 8" stroke="url(#g4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="g4" x1="0" x2="1">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#F472B6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 16 } },
};

export default function Features() {
  return (
    <section className="w-full bg-black px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-10">
          <h3 className="text-sm uppercase tracking-widest text-purple-300">Why choose us</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
            Powerful features to accelerate your learning
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Built with modern pedagogy and tools — project-based, mentor-backed and career-focused.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <motion.div key={f.id} variants={item} className="relative rounded-2xl p-6 bg-gradient-to-b from-white/3 to-white/2 border border-white/6 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 opacity-0 hover:opacity-60 blur-2xl pointer-events-none transition-opacity"></div>

              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-white/5 to-white/3 shadow-md">
                  <div className="w-12 h-12 flex items-center justify-center text-white">
                    {f.icon}
                  </div>
                </div>

                <h4 className="text-white font-semibold text-lg">{f.title}</h4>
                <p className="text-gray-300 text-sm">{f.desc}</p>

                <div className="mt-4">
                  <a className="inline-flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-white transition" href="#">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline-block" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14" stroke="#E9D5FF" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 5l7 7-7 7" stroke="#FBCFE8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
