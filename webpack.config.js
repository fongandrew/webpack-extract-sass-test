"use strict";
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: require("path").resolve("dist"),
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {  test: /\.ts$/, 
         loader: 'awesome-typescript-loader' },
      {  test: /\.scss$/,
         loader: ExtractTextPlugin.extract("style-loader", "css!sass") }
    ]     
  },

  plugins: [
    new ExtractTextPlugin("bundle.css", {allChunks: true})
  ]
};
