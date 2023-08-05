/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export'
};

// Remove or comment out the "images" property
nextConfig.images = {
  ...
};

module.exports = nextConfig;
