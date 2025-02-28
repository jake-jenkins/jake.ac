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
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "https://www.jake.ac"
                    },
                    {
                        key: "Cross-Origin-Resource-Policy",
                        value: "same-site"
                    },
                    {
                        key: "Permissions-Policy",
                        value: "camera=(); geolocation=(); microphone=();"
                    },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin"
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY"
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff"
                    },
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block"
                    },
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=31536000; includeSubDomains; preload"
                    }
                ]
            }
        ];
    }
};

export default nextConfig;
