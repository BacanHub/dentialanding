/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/dentialanding' : '',
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
  // This is needed for GitHub Pages
  trailingSlash: true,
}

export default nextConfig
