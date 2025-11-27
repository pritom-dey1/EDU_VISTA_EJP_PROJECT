"use client";

import { motion } from "framer-motion";
import { HiOutlineUserGroup, HiOutlineAcademicCap, HiOutlineChat, HiOutlineDesktopComputer } from "react-icons/hi";

export default function FeaturesGrid() {
  const features = [
    { icon: <HiOutlineUserGroup size={30} />, title: "Expert Instructors", desc: "Learn from industry leaders with years of experience." },
    { icon: <HiOutlineDesktopComputer size={30} />, title: "Hands-on Projects", desc: "Build real-world projects to sharpen your skills." },
    { icon: <HiOutlineChat size={30} />, title: "Community Support", desc: "Join a community of like-minded learners." },
    { icon: <HiOutlineAcademicCap size={30} />, title: "Flexible Learning", desc: "Learn at your own pace from anywhere." }
  ];

  return (
    <section className="w-full py-24 px-6 bg-black/80">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why Choose Us</h2>
        <p className="text-gray-400 mt-2">Features that make EDUVISTA stand out</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:scale-[1.03] hover:shadow-xl transition-transform"
          >
            <div className="text-purple-500">{f.icon}</div>
            <h3 className="text-white font-semibold text-lg">{f.title}</h3>
            <p className="text-gray-300 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
