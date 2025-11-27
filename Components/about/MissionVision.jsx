"use client";

import { motion } from "framer-motion";
import { HiOutlineLightBulb, HiOutlineEye } from "react-icons/hi";

export default function MissionVision() {
  const cards = [
    {
      icon: <HiOutlineLightBulb size={40} />,
      title: "Mission",
      desc: "Empowering learners worldwide with high-quality courses."
    },
    {
      icon: <HiOutlineEye size={40} />,
      title: "Vision",
      desc: "To be the leading platform for practical, career-oriented learning."
    }
  ];

  return (
    <section className="w-full py-24 bg-black/90 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {cards.map((c, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center gap-4 hover:scale-[1.02] transition-transform"
          >
            <div className="text-purple-500">{c.icon}</div>
            <h3 className="text-white text-2xl font-semibold">{c.title}</h3>
            <p className="text-gray-300">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
