/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        nextScriptWorkers: true,
    },
};

export default nextConfig;
