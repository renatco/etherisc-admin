const path = require('path');
const entry = require('./config/entry')

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'src/scripts'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader'
      },
      {
        test: /\.json/,
        loader: 'json-loader'
      },
    ]
  },
  devtool: 'inline-source-map'
};
