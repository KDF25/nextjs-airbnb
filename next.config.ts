import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      trace: true, // Включает автоматическое обновление изменений
    } as any,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com", "https://avatars.githubusercontent.com"],
  },
};
export default nextConfig;
