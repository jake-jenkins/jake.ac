import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
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
                        key: "Content-Security-Policy",
                        value: "default-src 'self'; connect-src 'self'; script-src 'strict-dynamic'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; frame-src 'self'; upgrade-insecure-requests;"
                    },
                    {
                        key: "Cross-Origin-Resource-Policy",
                        value: "same-site"
                    },
                    {
                        key: "Permissions-Policy",
                        value: "camera=(); geolocation=(); microphone=()"
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
                    }
                ]
            }
        ];
    }
};

export default nextConfig;
