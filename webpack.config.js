var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// var htmlWebpackPlugin =  require('html-webpack-plugin');
module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port:7000
  },
  entry: [
    "./app/index"
  ],
  output: {
    path: BUILD_PATH,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
        {
          presets:['react','es2015']
        }
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: APP_PATH
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      }
    ]
  },
  resolve:{
    extensions:['','.js','.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
};