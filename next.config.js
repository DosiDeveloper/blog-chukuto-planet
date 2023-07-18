/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://jmietyteyezuzurkaacb.supabase.co"],
  },
};

module.exports = nextConfig;
