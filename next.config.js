const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'custom',
    loaderFile: './akamai-loader.js',
  },
  basePath: '/dibbs-site',
  assetPrefix: '/dibbs-site',
  sassOptions: {
    includePaths: [
      path.join(__dirname, './', 'node_modules', '@uswds', 'uswds', 'packages'),
    ],
  },
};

module.exports = nextConfig;
