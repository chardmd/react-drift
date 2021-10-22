var path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/Drift.jsx",
  output: {
    path: path.resolve("lib"),
    filename: "Drift.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/Drift.d.ts", to: "./Drift.d.ts" }],
    }),
  ],
};
