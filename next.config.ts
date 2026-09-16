import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const sharedConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/cv/Guilherme_Fernandes_Resume.pdf",
        destination: "/cv/Guilherme_Fernandes_CV.pdf",
        permanent: true,
      },
      {
        source: "/cv/Guilherme_Fernandes_Resume.pdf.png",
        destination: "/cv/Guilherme_Fernandes_CV-page-1.png",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
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
