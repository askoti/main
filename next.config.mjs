/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  // This forces Next.js to use a consistent path for all assets
  distDir: '.next', 
  // This helps prevent 404s when navigating between pages/scrolls
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;