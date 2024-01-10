/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.epincms.com',
                port: '',
                pathname: '/ravan/**',
            },
        ],
    },
}

module.exports = nextConfig
