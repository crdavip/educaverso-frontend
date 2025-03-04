import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./src'],
    prependData: '@import "theme.scss";',
  },
};

export default nextConfig;
