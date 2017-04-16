const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssLoader = require('css-loader');
const styleLoader = require('style-loader');
const sassLoader = require('sass-loader');

module.exports = {
  entry: {
    home: './src/static/javascripts/home.js',
    about: './src/static/javascripts/about.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }

};
