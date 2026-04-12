/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // Change to false to ensure sitemap.xml and other files are served correctly
  trailingSlash: false,
  
  images: {
    unoptimized: true, 
  },
  // Note: distDir: '.next' is the default, you can keep it or remove it.
};

export default nextConfig;