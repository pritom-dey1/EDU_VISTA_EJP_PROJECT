"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { CourseCard } from "../Home/Courses";

// ---- FETCH FUNCTION ----
const fetchCourses = async () => {
  const res = await fetch("/api/courses");
  if (!res.ok) throw new Error("Failed to fetch courses");
  return res.json();
};

export default function AllCourses() {
  const { data: courses, isLoading, isError } = useQuery({
    queryKey: ["allcourses"],
    queryFn: fetchCourses,
  });

  // ---- LOADING ----
  if (isLoading) {
    return (
      <div className="w-full flex justify-center py-32">
        <div className="w-16 h-16 border-4 border-t-purple-500 border-purple-300 rounded-full animate-spin"></div>
      </div>
    );
  }

  // ---- ERROR ----
  if (isError || !courses) {
    return (
      <div className="w-full flex justify-center py-32 text-red-500 text-lg">
        Failed to load courses.
      </div>
    );
  }

  return (
    <section className="w-full bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h3 className="text-sm uppercase tracking-widest text-purple-300">
            All Courses
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
            Explore Our Full Course Library
          </h2>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
