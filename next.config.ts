import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["./src"],
    prependData: '@import "theme.scss";',
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "educaverso-api.up.railway.app",
      },
      {
        protocol: "https",
        hostname: "beunik-blog-pull-zone.b-cdn.net",
      },
      {
        protocol: "https",
        hostname: `${process.env.AZURE_STORAGE_ACCOUNT}.blob.core.windows.net`,
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
