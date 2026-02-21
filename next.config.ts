import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Only enable domain redirect in production
    if (process.env.NODE_ENV !== "production") {
      return [];
    }

    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.kaomoji.one",
          },
        ],
        destination: "https://kaomoji.one/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
