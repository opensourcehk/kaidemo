'use strict';

const UglifyPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new UglifyPlugin({minimize: true}),
    new OccurenceOrderPlugin(),
    new DedupePlugin()
  ],
  external: {

  },
  devtool: 'source-map',
  entry: {
    app: './assets/js/index.jsx'
  },
  output: {
    path: `${__dirname}/public/js`,
    publicPath: '/js',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json', '.css' ],
    fallback: ['node_modules']
  },
  resolveLoader: {
    fallback: ['node_modules']
  },
  postcss: [autoprefixer],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'jsx', 'babel']
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'jsx', 'babel']
      },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      }
    ]
  }
};
