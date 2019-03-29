const path = require("path");
const SkeletonWebpackPlugin = require("vue-skeleton-webpack-plugin");
module.exports = {
  css: {
    // need be true for skeleton
    extract: true
  },
  configureWebpack: config => {
    // skeleton webpack plugin
    config.plugins.push(
      new SkeletonWebpackPlugin({
        webpackConfig: {
          entry: {
            app: path.join(__dirname, "./src/skeleton.js")
          }
        },
        minimize: true,
        quiet: true
      })
    );
  }
};
