/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  output: "export",
  
  basePath: "/app-red-lab1",
  assetPrefix: "/app-red-lab1/", 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
