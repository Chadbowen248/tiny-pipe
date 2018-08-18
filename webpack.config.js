const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
      filename: './index.js'
    },
  output: {
      filename: 'dist/dist.js'
    },
  module: {
      loaders: [
            {
	            test: /\.js$/,
	            exclude: /node_modules/,
	            loader: 'babel-loader',
	          }
          ]
    }
};