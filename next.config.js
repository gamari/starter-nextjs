/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        port: '8000',
      },
    ],
  },
}

module.exports = nextConfig
