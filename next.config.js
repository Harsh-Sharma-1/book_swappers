/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SUPABASE_APP_URL: process.env.SUPABASE_APP_URL,
        SUPABASE_APP_CLIENT_TOKEN: process.env.SUPABASE_APP_CLIENT_TOKEN,
    },
};

module.exports = nextConfig;
