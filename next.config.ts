import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      trace: true, // Включает автоматическое обновление изменений
    } as any,
  },
};
export default nextConfig;
