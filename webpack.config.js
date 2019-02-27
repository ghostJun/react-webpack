// webpack 配置文件
const path = require('path');

// html打包插件开始
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  hash: true //用于给打包后的bundle.js加hash后缀
});
// html打包插件结束

module.exports = {
  // 多Html配置
  // 入口(entry)
  entry: './src/index.js',
  // 出口(output)
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 模块
  module: { rules: [{}] },
  // 插件
  plugins: [htmlPlugin],
  // 开发服务器配置
  devServer: {},
  // 模式
  mode: 'development'
};
