/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  output: "export",
  
  basePath: "/persona-ordenador-lab1",
  assetPrefix: "/persona-ordenador-lab1/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
