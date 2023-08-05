/** @type {import('next').NextConfig} */
const nextConfig = {
    export: 'output'
};

// Remove or comment out the "images" property
nextConfig.images = {
  ...
}

module.exports = nextConfig;
