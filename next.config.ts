import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
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
