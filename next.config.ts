/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'softium.uz',
      },
    ],
  },
}


module.exports  = nextConfig;