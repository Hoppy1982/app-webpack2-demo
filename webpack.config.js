const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssLoader = require('css-loader');
const styleLoader = require('style-loader');
const sassLoader = require('sass-loader');

const extractSass = new ExtractTextPlugin({
  filename: 'stylesheets/[name].bundle.css',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: {
    home: './src/static/javascripts/home.js',
    about: './src/static/javascripts/about.js',
    scss: './src/static/main.scss'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      })

    }]
  },
  plugins: [
    extractSass
  ]

};
