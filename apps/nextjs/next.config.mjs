/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "data.bapairaew.com",
      },
    ],
  },
};

export default nextConfig;
