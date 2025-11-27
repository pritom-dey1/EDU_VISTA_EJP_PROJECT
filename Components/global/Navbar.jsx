"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import { HiUserCircle, HiMenu, HiX } from "react-icons/hi";
import React, { useState, useEffect, useRef } from "react";
import AddCourseModal from "./AddCourseModal";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto py-4 px-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <h2 className="text-white font-extrabold text-[25px]">EDUVISTA</h2>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium justify-center">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/courses" className="hover:text-white transition">Courses</Link>
          <Link href="/my-courses" className="hover:text-white transition">My Courses</Link>
        </div>

        {/* BUTTONS / PROFILE */}
        <div className="flex items-center gap-4">
          {!session ? (
            <div className="hidden md:flex gap-4">
              <Link
                href="/log-in"
                className="px-5 py-2 rounded-xl text-gray-200 font-semibold border border-white/20 hover:bg-white/10 transition"
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3 relative">
              {/* Add Courses Button */}
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setModalOpen(true);
                }}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-md transition hidden md:inline-block"
              >
                + Add Courses
              </Link>
              <AddCourseModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

              {/* Profile Dropdown */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center text-white text-3xl hover:text-purple-400 transition"
                >
                  <HiUserCircle />
                </button>

                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="absolute right-0 mt-4 w-40 bg-black/70 backdrop-blur-md rounded-xl shadow-lg border border-white/20 overflow-hidden z-50"
                  >
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-white hover:bg-white/10 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="w-full text-left px-4 py-2 text-white hover:bg-white/10 transition"
                    >
                      Log Out
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          )}

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-3xl ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 py-4 flex flex-col items-center gap-4 text-white font-medium">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/courses" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
          <Link href="/my-courses" onClick={() => setMobileMenuOpen(false)}>My Courses</Link>

          {session ? (
            <>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-md"
              >
                + Add Courses
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold shadow-md"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/log-in"
                className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </motion.nav>
  );
}
