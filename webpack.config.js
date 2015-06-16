/* jshint globalstrict: true, esnext: true */
/* global __dirname, module */

'use strict';

module.exports = {
  context: __dirname + '/',
  entry: './index.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  }
};

