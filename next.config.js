const { merge } = require("webpack-merge");

const ALIASES = require("./lib/aliases.js");

module.exports = {
  webpack: (config) => {
    return merge(config, {
      resolve: {
        alias: ALIASES,
      },
      module: {
        rules: [
          {
            test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
            use: {
              loader: "url-loader",
              options: {
                limit: 100000,
              },
            },
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: "babel-loader",
              },
              {
                loader: "react-svg-loader",
              },
            ],
          },
        ],
      },
    });
  },
};
