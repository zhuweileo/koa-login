var path = require('path');
var htmlPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var {pages} = require('./page-map'); 

module.exports = {
  entry: getEntry(pages),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]/[name].js', // 保证每个页面可以打包进不同文件夹
  },
  mode: 'production',
  externals:{
    react: 'React', //不将react打包进来
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
        // exclude: /node_modules/, //不能加这个，否则import 'antd/dist/antd.css' 时会报错
        use: [
          process.env.NODE_ENV === 'production'? MiniCssExtractPlugin.loader: 'style-loader',
          "css-loader",
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
      filename: "[name]/[name].css", //保证每个页面的css可以放在自己的文件夹内
      chunkFilename: "[name]/[id].css"
    })
  ]

  pages.forEach(function (item) {
    var plugin =new htmlPlugin({
      filename: `${item.name}/${item.name}.html`,  //保证每个页面的html可以放在自己的文件夹内
      template: path.resolve(__dirname,item.template),
      chunks: [item.name], //html只引入自己的js和css
    })
    plugins.push(plugin);
  })
  return plugins
}