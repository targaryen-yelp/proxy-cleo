var path = require('path');
// var SRC_DIR = path.join(__dirname, './client/src');
// var DIST_DIR = path.join(__dirname, './client/dist');
// var webpack = require('webpack');

  


module.exports = {
  module: {
    rules: [
      // {
      //   test : /\.jsx?/,
      //   // include : SRC_DIR,
      //   loader : 'babel-loader',
      //   query: {
      //     presets: ['react', 'env'],
      //   },
      // },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  mode: 'development'
};