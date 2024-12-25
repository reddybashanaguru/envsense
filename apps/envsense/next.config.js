//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  // experimental: {
  //   appDir: true, // Enable the new App Router feature (optional)
  //   turbo: true,  // Use Next.js Turbo Pack (if applicable)
  // },
  reactStrictMode: true, // Enforce React best practices
  images: {
    domains: ['example.com'], // Add any external image domains here
  },
  eslint: {
    // Run ESLint on every build
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Ensure type checking during builds
    ignoreBuildErrors: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
