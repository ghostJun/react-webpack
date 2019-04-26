const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
// webpack 配置文件
const path = require('path');

const webpackConfig = merge(baseConfig, {
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/dev')
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        inline: true,//do not use iframe for the page, true is default
        open: true,//open browser after dev server starts, true is default
        port: 8080,//8080 is default
        hot: true,
    }
    //environment specific config goes here
});
module.exports = webpackConfig;
