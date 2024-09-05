// /** @type {import('next').NextConfig} */
// const nextConfig = {
 
//     images: {
//         remotePatterns: [
//           {
//             protocol: 'https',
//             hostname: 'images.unsplash.com',
//             pathname: '**',
//           },
//         ],
//       },
//       eslint: {
//         ignoreDuringBuilds: true, 
//       }
// };

// export default nextConfig;
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
    ignoreDuringBuilds: true, // This allows the build to succeed even if there are ESLint errors
  },
};

export default nextConfig;

