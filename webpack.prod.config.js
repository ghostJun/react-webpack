const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');

const webpackConfig = merge(baseConfig, {
    mode:'production'
    //environment specific config goes here
});

module.exports = webpackConfig;
