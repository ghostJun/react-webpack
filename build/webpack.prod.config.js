const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
// webpack 配置文件
const path = require('path');

const webpackConfig = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/prod')
    },
    //environment specific config goes here
});

module.exports = webpackConfig;
