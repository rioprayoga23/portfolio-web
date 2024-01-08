/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
