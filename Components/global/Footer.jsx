import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-white text-2xl font-bold">EDUVISTA</h2>
          <p className="text-gray-400 text-sm">
            Learn, grow, and advance your career with our curated courses and community.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <FaFacebookF className="text-gray-400 hover:text-purple-500 transition cursor-pointer" />
            <FaTwitter className="text-gray-400 hover:text-purple-500 transition cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-purple-500 transition cursor-pointer" />
            <FaLinkedinIn className="text-gray-400 hover:text-purple-500 transition cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-purple-500 transition cursor-pointer">Home</li>
            <li className="hover:text-purple-500 transition cursor-pointer">Courses</li>
            <li className="hover:text-purple-500 transition cursor-pointer">About</li>
            <li className="hover:text-purple-500 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-purple-500 transition cursor-pointer">Blog</li>
            <li className="hover:text-purple-500 transition cursor-pointer">Help Center</li>
            <li className="hover:text-purple-500 transition cursor-pointer">Privacy Policy</li>
            <li className="hover:text-purple-500 transition cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold mb-4">Subscribe</h4>
          <p className="text-gray-400 text-sm">Get the latest updates and offers.</p>
          <div className="flex">
            <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 rounded-l-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none" />
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-r-xl text-white font-semibold hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} EDUVISTA. All rights reserved.
      </div>
    </footer>
  );
}