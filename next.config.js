/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  staticPageGenerationTimeout: 1000,
};

module.exports = nextConfig;
