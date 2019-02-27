// webpack 配置文件(多入口)
const path = require('path');

// html打包插件开始
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPluginIndex = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  hash: true //用于给打包后的bundle.js加hash后缀
});
const htmlPluginOther = new HtmlWebpackPlugin({
  template: './src/other.html',
  filename: 'other.html',
  hash: true,
  chunks: ['other'] //对应关系 other.js 对应 other.html
});
// html打包插件结束

module.exports = {
  // 多Html配置
  // 入口(entry)
  entry: ['./src/index.js', './src/other.js'],
  // 出口(output)
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 模块
  module: {},
  // 插件
  plugins: [htmlPluginIndex, htmlPluginOther],
  // 开发服务器配置
  devServer: {},
  // 模式
  mode: 'development'
};
