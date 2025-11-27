/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",   // allow ANY domain
      },
      {
        protocol: "http",
        hostname: "**",
      }
    ],
  },

  experimental: {
    runtime: "nodejs",
  },

  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, os: false };
    return config;
  },

  turbopack: {},
};

module.exports = nextConfig;
