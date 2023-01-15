/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
  env: {
    STRAPI_URL: process.env.STRAPI_URL,
  },
};

module.exports = nextConfig;
