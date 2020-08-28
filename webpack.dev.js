// eslint-disable-next-line
const merge = require("webpack-merge");
// eslint-disable-next-line
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map"
});
