/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kktdi.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/",
      },
      {
        source: "/portfolio",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
