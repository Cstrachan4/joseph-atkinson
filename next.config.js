const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const { merge } = require('webpack-merge');

const ALIASES = require('./lib/aliases.js');


const initExport = {
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
              loader: 'url-loader',
              options: {
                limit: 100000,
                outputPath: '...',
                context: 'src',
                name: '[path][name].[hash:8].[ext]',
                publicPath: `public`,
              }
            }
          },
          {
            test: /\.svg$/,
            use: [{
              loader: 'babel-loader'
            }, {
              loader: 'react-svg-loader'
            }]
          }
        ],
      },
    });
  },
};

module.exports = withCSS(
  withSass(initExport, {
    postcssLoaderOptions: { parser: true, autoprefixer: true },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 2,
      localIdentName: '[local]___[hash:base64:5]',
    },
  }),
);
