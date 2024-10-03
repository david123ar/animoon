// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during the build process
  },
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript errors during the build process
  },
};

export default nextConfig;
