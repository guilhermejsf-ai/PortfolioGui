import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const sharedConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default function nextConfig(phase: string): NextConfig {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...sharedConfig,
      distDir: ".next-dev",
    };
  }

  return sharedConfig;
}
