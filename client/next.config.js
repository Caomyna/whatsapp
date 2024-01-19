/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: "274529884",
    NEXT_PUBLIC_ZEGO_SERVER_ID: "7c7b6de5f2e0947ce1d10627c0263d83"
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
