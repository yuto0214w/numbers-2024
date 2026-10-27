const path = require("node:path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import("webpack").Configuration} */
const config = {
  mode: "production",
  entry: {
    main: path.join(__dirname, "src", "game.js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "game.html"),
      filename: "game.html",
      chunks: ["main"],
      inject: "head",
      scriptLoading: "blocking",
      minify: false,
    }),
  ],
};

module.exports = config;
