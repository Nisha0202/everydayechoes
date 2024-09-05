/** @type {import('next').NextConfig} */
const nextConfig = {
 
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            pathname: '**',
          },
        ],
      },
      eslint: {
        ignoreDuringBuilds: true, 
      },
      rules: {
        'react/no-unescaped-entities': 'off',
      },
};

export default nextConfig;
