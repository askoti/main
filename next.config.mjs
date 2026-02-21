/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // This ensures paths always end in a slash, helping Hostinger's 
  // Apache/Nginx server find the static files
  trailingSlash: true,
  // This helps prevent chunk errors during re-deploys
  generateBuildId: async () => 'build-' + Date.now(),
};

export default nextConfig;