"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { title: "Students", value: 5000 },
  { title: "Courses", value: 120 },
  { title: "Satisfaction", value: 95, suffix: "%" }
];

export default function StatsSection() {
  return (
    <section className="w-full py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Our Achievements
        </h2>
        <p className="text-gray-400">
          See how we’ve grown and impacted learners worldwide
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative rounded-2xl p-8 flex flex-col items-center justify-center
                       border border-purple-600/40 shadow-sm hover:shadow-lg transition-shadow"
            style={{
              boxShadow: "0 0 15px rgba(147, 51, 234, 0.4)" // subtle purple glow
            }}
          >
            <h3 className="text-5xl md:text-6xl font-extrabold text-white">
              <CountUp end={s.value} duration={2} />{s.suffix || ""}
            </h3>
            <p className="text-gray-300 mt-2 text-lg">{s.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
