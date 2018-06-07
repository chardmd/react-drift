var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/Drift.jsx",
  output: {
    path: path.resolve("lib"),
    filename: "Drift.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  }
};
