"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSession } from "next-auth/react";

// ---- COURSE CARD COMPONENT ----
export function CourseCard({ course }) {
  const { data: session } = useSession();

  // Skeleton loading
  if (!course || typeof course !== "object" || !course._id) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="bg-white/3 border border-white/6 rounded-2xl p-6 flex items-center justify-center text-center text-gray-300"
      >
        <div>
          <div className="w-20 h-20 rounded-lg bg-white/5 mx-auto mb-4 animate-pulse" />
          <div className="h-3 w-32 bg-white/5 mx-auto rounded mb-2 animate-pulse" />
          <div className="h-3 w-20 bg-white/5 mx-auto rounded animate-pulse" />
        </div>
      </motion.div>
    );
  }

  const id = course._id;
  const thumb = course.image || "/placeholder-course.jpg";

  const handleClick = (e) => {
    if (!session) {
      e.preventDefault(); // prevent navigation
      window.location.href = "/log-in"; // redirect to login
    }
  };

  return (
    <Link href={`/courses/${id}`} onClick={handleClick}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden 
        backdrop-blur-md shadow-xl hover:scale-[1.03] transition-transform 
        group cursor-pointer relative"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 
        bg-gradient-to-r from-purple-500 to-pink-500 blur-xl transition pointer-events-none" />

        <div className="relative z-10">
          <div className="w-full h-40 overflow-hidden bg-black/20">
            <Image
              src={thumb}
              alt={course.title}
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-5 space-y-3">
            <h3 className="text-white font-semibold text-lg">{course.title}</h3>
            <p className="text-gray-300 text-sm line-clamp-2">{course.description}</p>

            <div className="flex items-center justify-between mt-3">
              <span className="text-purple-300 text-sm font-medium uppercase">
                {course.level}
              </span>
              <span className="text-white font-semibold">{course.price}$</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// ---- FETCH FUNCTION ----
const fetchCourses = async () => {
  const res = await fetch("/api/courses");
  if (!res.ok) throw new Error("Failed to fetch courses");
  return res.json();
};

// ---- COURSE SECTION ----
export default function Courses() {
  const { data: courses, isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  if (isLoading) {
    return (
      <div className="w-full flex justify-center py-24">
        <div className="w-16 h-16 border-4 border-t-purple-500 border-purple-300 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isError || !courses) {
    return (
      <div className="w-full flex justify-center py-24 text-red-500">
        Failed to load courses.
      </div>
    );
  }

  return (
    <section className="w-full bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h3 className="text-sm uppercase tracking-widest text-purple-300">Courses</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
            Boost Your Career With Premium Courses
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            High‑quality, project‑based learning crafted by industry experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-xl text-white font-semibold shadow-lg hover:opacity-90 transition duration-300">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
