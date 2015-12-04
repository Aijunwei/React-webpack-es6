var path = require('path');
var webpack= require('webpack');
var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/, // A regexp to test the require path. accepts either js or jsx
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
   plugins: [
      new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;