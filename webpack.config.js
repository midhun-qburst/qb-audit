const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './build/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};