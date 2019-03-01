const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');

const webpackConfig = merge(baseConfig, {
    mode:'development'
    //environment specific config goes here
});

module.exports = webpackConfig;
