//Me, read up on path module and see if it can help with ../../../
const path = require('path');
//It moves all the require("style.css")s in entry chunks into a separate single CSS file.
//So your styles are no longer inlined into the JS bundle, but separate in a CSS bundle file (styles.css).
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//Allows js to suck up css files with require('css')
const cssLoader = require('css-loader');
//Inserts the styles into the page from the js file where they got sucked into by cssloader.
const styleLoader = require('style-loader');
//scsss or sass to css
const sassLoader = require('sass-loader');
//Auto refresh browser on edits to specified files in options
const browserSyncPlugin = require('browser-sync-webpack-plugin');
//Used to move files about between src and dist. It can probs do more.
const fileLoader = require('file-loader');

module.exports = {
  //Some doc I read recommended one entry point per view, good enough for me.
  //You end up with one [name]bundle.js per entry point.
  entry: {
    home: './src/static/javascripts/home.js',
    about: './src/static/javascripts/about.js'
  },

  //Where the bundle/js's end up and what they're called.
  //PublicPath is where urls point at once you've deployed your site.
  output: {
    filename: 'static/javascripts/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static'
  },

  //The tests are regex's that match end of string, ie the file extensions.
  //If test finds a match then the use happens of that file.
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

  //Not exactly sure on difference between loaders (above) and plugins (below).
  plugins: [
    new ExtractTextPlugin({
      filename: '/static/stylesheets/[name].css',
      disable: false,
      allChunks: true
    }),
    new browserSyncPlugin({
      host: 'localhost',
      port: 3000,
      files: ['./dist/**/*.pug', './dist/**/*.css', './dist/**/*.js'],
      proxy: 'localhost:3000'
    })
  ]

};
