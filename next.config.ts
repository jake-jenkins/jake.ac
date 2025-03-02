import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    poweredByHeader: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "a.storyblok.com"
            }
        ]
    }
};

export default nextConfig;
