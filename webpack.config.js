const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.module.js',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};