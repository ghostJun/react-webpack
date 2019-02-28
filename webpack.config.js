// webpack 配置文件
const path = require('path');

// html打包插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// css拆分插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // 多Html配置
  // 入口(entry)
  entry: './src/index.js',
  // 出口(output)
  output: {
    filename: 'static/js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 模块
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader' }, { loader: 'less-loader' }]
        })
      }
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      hash: true //用于给打包后的bundle.js加hash后缀
    }),
    new ExtractTextPlugin('static/style/style.css')
  ],
  // 开发服务器配置
  devServer: {},
  // 模式
  mode: 'development'
};
