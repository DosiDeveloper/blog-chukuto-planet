/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images:{
    remotePattern: [
      {
        protocol: 'https',
        hostname: 'jmietyteyezuzurkaacb.supabase.co',
        port: '',
        pathname: '/blog_storage/images/**',
      },
    ],
  }
};

module.exports = nextConfig;
