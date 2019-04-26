// webpack 配置文件
const path = require('path');

// html打包插件
const HtmlWebpackPlugin = require('_html-webpack-plugin@3.2.0@html-webpack-plugin');

// css拆分插件
const ExtractTextPlugin = require('_extract-text-webpack-plugin@4.0.0-beta.0@extract-text-webpack-plugin');

const CleanWebpackPlugin = require('_clean-webpack-plugin@1.0.1@clean-webpack-plugin');

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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {modules: true}
                        },
                        {loader: 'less-loader'}
                    ]
                })
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
        new CleanWebpackPlugin(['dist']),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            hash: true //用于给打包后的bundle.js加hash后缀
        }),
        new ExtractTextPlugin('static/style/style.css')
    ],
    // 开发服务器配置
    devServer: {},
};
