// webpack 配置文件
const path = require('path');

// html打包插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// css拆分插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // 入口(entry)
    entry: './src/index.js',
    // 模块
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.(le|c)ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, 'css-loader', 'less-loader']
            }, {
                test: /\.(png|jpg|jepg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[hash:5].min.[ext]',
                            limit: 200000,
                            publicPath: '../img/',
                            outputPath: 'static/img/'
                        }
                    }
                ]
            }
        ]
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),//根目录
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            hash: true //用于给打包后的bundle.js加hash后缀
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: './static/css/[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
    ]
}

