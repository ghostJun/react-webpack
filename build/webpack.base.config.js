// webpack 配置文件
const path = require('path');

const webpack = require('webpack');

// html打包插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// css拆分插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

// 压缩css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 压缩js
const Uglifyjs = require('uglifyjs-webpack-plugin');

module.exports = function (env) {
    const isDev = env.dev || false;
    console.log('=========================');
    console.log('env:', env, 'isDev', isDev);
    console.log('=========================');

    const buildPath = isDev ? '../dist/dev' : '../dist/prod';

    const devtool = isDev ? 'inline-source-map' : 'inline-source-map';

    return {
        mode: isDev ? 'development' : 'production',
        // 入口(entry)
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, buildPath),
        },
        devtool: devtool,
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
                    test: /\.(le|c)ss$/,
                    use: [MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    }, 'less-loader']
                }, {
                    test: /\.(png|jpg|jepg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: isDev ? '[name].[ext]' : '[name]-[hash:5].min.[ext]',
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
                filename: isDev ? './static/css/[name].css' : './static/css/[name].[hash].css',
                chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
            }),
            new webpack.HotModuleReplacementPlugin(),
            new OptimizeCSSAssetsPlugin(),
            new Uglifyjs()
        ],
        devServer: {
            inline: true,//do not use iframe for the page, true is default
            open: true,//open browser after dev server starts, true is default
            port: 8080,//8080 is default
            hot: true,
        }
    }
}

