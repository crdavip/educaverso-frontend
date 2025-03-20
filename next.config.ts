import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./src'],
    prependData: '@import "theme.scss";',
  },
  images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost'
        },
      ]
    }
};

export default nextConfig;
