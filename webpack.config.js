const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/app.js',
  output: {
    filename: './build/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // Emit source maps so we can debug our code in the browser
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    // Configure HtmlPlugin to use our own index.html file
    // as a template.
    // Check out https://github.com/jantimon/html-webpack-plugin
    // for the full list of options.
    new HtmlPlugin({
      template: 'index.html'
    })
  ]
};