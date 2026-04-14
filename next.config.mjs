/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // Change to false to ensure sitemap.xml and other files are served correctly
  trailingSlash: false,
  
  images: {
    unoptimized: true, 
  },
  experimental: {
    browsersListForSwc: true,
  },
  // This alone can save 50-100 KiB
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Note: distDir: '.next' is the default, you can keep it or remove it.
};

export default nextConfig;