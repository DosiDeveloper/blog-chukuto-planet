/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { 
        protocol: "https",
        hostname: "jmietyteyezuzurkaacb.supabase.co",
        pathname: "/storage/**"
      },
    ],
  },
};

module.exports = nextConfig;
