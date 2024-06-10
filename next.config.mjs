import { env } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: env.NODE_ENV === 'production' ? 'docs' : '.next',
    experimental: {
        // Commented out temporarily
        // Probably need to be enabled
        // if watchdog related error happens
        // esmExternals: 'loose'
    }
};

export default nextConfig;
