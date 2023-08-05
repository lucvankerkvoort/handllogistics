/** @type {import('next').NextConfig} */
const nextConfig = {
  export: "output",
  images: {
    loader: "imgix",
    path: "hllogistics-6531.imgix.net",
  },
};

module.exports = nextConfig;
