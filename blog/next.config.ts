import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    // loader: 'imgix',
    // path: '',
    domains: ['images.microcms-assets.io'],
  },
};

export default nextConfig;


