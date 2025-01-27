// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: process.env.LIGHTHOUSE ? 'export' : 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, './', 'node_modules', '@uswds', 'uswds', 'packages'),
    ],
  },
};

module.exports = nextConfig;
