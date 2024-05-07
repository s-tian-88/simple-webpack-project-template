const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new Webpack.ProgressPlugin(),
  ],

  devServer: {
    port: 7070,
  }

});
