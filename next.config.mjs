/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['images.unsplash.com'],
    // },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
