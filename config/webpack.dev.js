const paths = require("./paths")
const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  /**
   * Mode
   *
   * Set the mode to development or production.
   */
  mode: "development",

  /**
   * Devtool
   *
   * Control how source maps are generated.
   */
  devtool: "inline-source-map",

  /**
   * DevServer
   *
   * Spin up a server for quick development.
   */
  devServer: {
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    /**
     * HotModuleReplacementPlugin
     *
     * Only update what has changed.
     */
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __API_HOST: JSON.stringify("http://127.0.0.1:8000/"),
    }),
  ],
})
