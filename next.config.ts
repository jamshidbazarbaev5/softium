/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'softium.uz:8000',
      },
    ],
  },
}


module.exports  = nextConfig;