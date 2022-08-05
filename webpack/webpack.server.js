const path = require("path");
const nodeExternals = require("webpack-node-externals");

const root = process.cwd();

module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(root, "./build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
