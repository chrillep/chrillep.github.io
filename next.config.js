/* eslint-disable @typescript-eslint/no-var-requires */

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const nextBuildId = require('next-build-id')

module.exports = {
  reactStrictMode: true,
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  /**
   * Custom Webpack Config
   * https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
   */
  webpack: (config, { dev, isServer }) => {
    // Do not run type checking twice:
    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }
    return config
  },
}
