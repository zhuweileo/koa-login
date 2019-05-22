var path = require('path');
var htmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var {pages} = require('./page-map'); 

module.exports = {
  entry: getEntry(pages),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]/[name].js',
  },
  mode: 'development',
  externals:{
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader",
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ]
      },
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV === 'production'? MiniCssExtractPlugin.loader: 'style-loader',
          "css-loader",
          "sass-loader",
        ]
      },
    ]
  },
  plugins: getPlugins(pages),
}

function getEntry(pages) {
  var entry = {}
  pages.forEach(function (item) {
    entry[item.name] = item.entry;
  })
  return entry
}

function getPlugins(pages) {
  var plugins = [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name]/[name].css",
      chunkFilename: "[name]/[id].css"
    })
  ]

  pages.forEach(function (item) {
    var plugin =new htmlPlugin({
      filename: `${item.name}/${item.name}.html`,
      template: path.resolve(__dirname,item.template),
      chunks: [item.name],
    })
    plugins.push(plugin);
  })
  return plugins
}