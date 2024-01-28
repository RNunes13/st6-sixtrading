const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const isProd = process.env.NODE_ENV = "production";

module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/pages", to: "" },
        { from: "./src/assets", to: "assets" },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
