const path = require("path");

const root = process.cwd();

module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(root, "./public"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
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
