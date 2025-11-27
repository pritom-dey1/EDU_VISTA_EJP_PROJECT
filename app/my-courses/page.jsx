"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function MyCourses() {
  const { data: session } = useSession();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    if (!session) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/my-courses?email=${session.user.email}`);
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, [session]);

const handleDelete = async (id) => {
  if (!confirm("Are you sure you want to delete this course?")) return;

  try {
    await fetch(`/api/courses?id=${id}`, { method: "DELETE" }); // ✅ query param
    setCourses(courses.filter(course => course._id !== id));
  } catch (err) {
    console.error("Error deleting course:", err);
  }
};

  if (!session) {
    return (
      <div className="text-white pt-28 text-center">
        Please log in first.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto pt-28 px-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">My Courses</h2>

      {loading ? (
        <div className="flex justify-center mt-10">
          <div className="loader border-t-4 border-white border-solid rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : courses.length === 0 ? (
        <p className="text-white text-center mt-10">
          You didn’t add any course.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div
              key={course._id}
              className="p-4 bg-white/10 rounded-xl text-white relative"
            >
              <img
                src={course.image}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold mt-3">{course.title}</h3>
              <p className="text-sm mt-2">{course.description}</p>
              <p className="mt-3 font-bold">${course.price}</p>
              <button
                onClick={() => handleDelete(course._id)}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Spinner styles */}
      <style jsx>{`
        .loader {
          border-top-color: #fff;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
