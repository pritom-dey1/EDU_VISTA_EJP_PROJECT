"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

export default function AddCourseModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    level: "beginner",
    tags: "",
  });
  const [loading, setLoading] = useState(false);
    const { data: session } = useSession(); 
  if (!session?.user?.email) {
  toast.error("Login required")
  return
}
  if (!isOpen) return null;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const body = {
        ...form,
        price: Number(form.price),
        tags: form.tags.split(",").map((t) => t.trim()),
      };

      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Failed to add course");

      toast.success("Course added successfully!");
      setForm({
        title: "",
        description: "",
        price: "",
        image: "",
        level: "beginner",
        tags: "",
      });
      onClose();
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }

    setLoading(false);
  };console.log("Session:", session)


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed min-h-screen inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-black/80 rounded-2xl p-8 w-full max-w-lg text-white relative"
      >
        <h2 className="text-2xl font-bold mb-6">Add New Course</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none"
            required
          />
          
          <textarea
            name="description"
            placeholder="Course Description"
            value={form.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price in USD"
            value={form.price}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none"
          />
          <select
            name="level"
            value={form.level}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white focus:outline-none"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="All Levels">All Levels</option>
          </select>
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated)"
            value={form.tags}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none"
          />

          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition"
            >
              {loading ? "Adding..." : "Add Course"}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
