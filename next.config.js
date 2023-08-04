/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint : {
        ignoreDuringBuilds : true,
    },
    images : {
        domains : ['placehold.co'],
        dangerouslyAllowSVG: true,
    }
}

module.exports = nextConfig
