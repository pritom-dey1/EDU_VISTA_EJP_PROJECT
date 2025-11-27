"use client";

import { motion } from "framer-motion";

const team = [
  { name: "John Doe", role: "Founder & CEO", img: "/user4.webp" },
  { name: "Jane Smith", role: "Lead Instructor", img: "/user3.webp" },
  { name: "Mike Johnson", role: "CTO", img: "/user4.webp" },
];

export default function TeamSection() {
  return (
    <section className="w-full py-24 px-6 bg-black/90">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Team</h2>
        <p className="text-gray-400 mt-2">Meet the people behind EDUVISTA</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col items-center text-center p-6 hover:scale-[1.02] transition-transform"
          >
            <img src={t.img} alt={t.name} className="w-32 h-32 rounded-full object-cover mb-4" />
            <h3 className="text-white font-semibold text-lg">{t.name}</h3>
            <p className="text-gray-300">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
