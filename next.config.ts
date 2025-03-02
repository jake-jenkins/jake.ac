import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
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
