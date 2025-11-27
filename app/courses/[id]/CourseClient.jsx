"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useState } from "react";

export default function CourseClient({ course }) {
  const { data: session } = useSession();
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = () => {
    if (!session) {
      toast.error("Please log in to enroll");
      setTimeout(() => (window.location.href = "/log-in"), 1000);
      return;
    }

    setEnrolled(true);
    toast.success("You are enrolled!");
  };

  return (
    <section className="w-full bg-black py-30 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
        >
          <Image
            src={course.image}
            width={600}
            height={400}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white space-y-6"
        >
          <h1 className="text-4xl font-bold">{course.title}</h1>
          <p className="text-gray-300">{course.description}</p>

          <div className="flex items-center gap-6 text-purple-300">
            <span className="uppercase">{course.level}</span>
            <span className="text-white font-semibold text-xl">${course.price}</span>
          </div>

          <button
            onClick={handleEnroll}
            disabled={enrolled}
            className={`px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition duration-300 ${
              enrolled
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 hover:opacity-90"
            }`}
          >
            {enrolled ? "Enrolled" : "Enroll Now"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
