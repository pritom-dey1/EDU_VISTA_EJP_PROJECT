"use client";

import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      toast.error("Invalid email or password");
    } else {
      toast.success("Logged in successfully!");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000); // redirect after 1s so toast shows
    }

    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-purple-900 via-black to-pink-900 relative overflow-hidden">
      {/* Gradient Bubble Backgrounds */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>

      <div className="relative max-w-md w-full bg-black/50 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/10 mt-20">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wide">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="text-gray-300 mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-gray-300 mb-2 block text-sm font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 pr-12"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-4 top-[70%] -translate-y-1/2 text-gray-400 hover:text-white text-xl transition"
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-xl text-white font-bold shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_25px_rgba(255,0,255,0.6)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-t border-white/20" />
          <span className="mx-3 text-white/50 text-sm">or</span>
          <hr className="flex-1 border-t border-white/20" />
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full py-3 border border-white/20 rounded-xl text-white gap-3 hover:bg-white/5 transition"
        >
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>

        <p className="text-white text-center mt-3 text-sm">
          DON'T HAVE AN ACCOUNT?{" "}
          <Link
            href="/sign-up"
            className="text-purple-500 hover:underline uppercase"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
