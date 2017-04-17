const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssLoader = require('css-loader');
const styleLoader = require('style-loader');
const sassLoader = require('sass-loader');
const browserSyncPlugin = require('browser-sync-webpack-plugin');
const fileLoader = require('file-loader');

module.exports = {
  entry: {
    home: './src/static/javascripts/home.js',
    about: './src/static/javascripts/about.js'
  },

  output: {
    filename: 'static/javascripts/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static'
  },

  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
        publicPath: '/static'
      })
    }, {
      test: /\.pug$/,
      use: 'file-loader?name=[name].[ext]&publicPath=/static/&outputPath=/views/'
    }]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '/static/stylesheets/[name].css',
      disable: false,
      allChunks: true
    }),
    new browserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    })
  ]

};
