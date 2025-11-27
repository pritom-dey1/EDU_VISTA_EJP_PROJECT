"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Frontend Developer @ Pathao",
    text: "The courses completely transformed my skills. The project-based approach made learning addictive.",
    img: "/user4.webp",
  },
  {
    id: 2,
    name: "Rafiul Karim",
    role: "Software Engineer @ BJIT",
    text: "One of the best learning experiences I've ever had. The instructors are world‑class.",
    img: "/user3.webp",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "UI/UX Designer @ DesignHub",
    text: "Beautifully structured lessons and amazing career support. Highly recommended!",
    img: "/user4.webp",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black py-34 px-6 relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[150px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm uppercase tracking-widest text-purple-300">Testimonials</h3>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
            Loved by thousands of learners
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Hear what our students are saying after transforming their career
            with our advanced learning system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:scale-[1.03] transition-transform group overflow-hidden"
            >
              {/* Glow Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-gradient-to-r from-purple-500 to-pink-500 blur-xl transition"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold text-lg">{t.name}</h4>
                    <p className="text-purple-300 text-sm">{t.role}</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm">{t.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
