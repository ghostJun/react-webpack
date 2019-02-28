# react-webpack
webpack4 配置学习

## 基本配置
```
module.exports = {
    entry: '',               // 入口文件
    output: {},              // 出口文件
    module: {},              // 处理对应模块
    plugins: [],             // 对应的插件
    devServer: {},           // 开发服务器配置
    mode: 'development'      // 模式配置
}
```

## Html文件打包
安装html-webpack-plugin插件

``` 
npm i html-webpack-plugin -D 
```

## 安装Babel全家桶
Babel是一个javascript编译器，将es2015+代码转换为向后兼容版本的javascript代码

```
npm i -D @babel/core        es6 ==> es5
npm i -D @babel/preset-env  根据您要支持的浏览器，决定使用哪些 transformations / plugins 和 polyfills，例如为旧浏览器提供现代浏览器的新特性
npm i -D babel-loader       使用 Babel 转换 JavaScript依赖关系的 Webpack 加载器

若要实现对jsx和react的支持，还需要
npm i -D @babel/preset-react 
```

## 安装React

```
npm i -D react react-dom
```

## 配置webpack.config.js及.babelrc
```
webpack.config.js增加对jsx的支持
module:{
    rules:[
        {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:['babel-loader]
        }
    ]
}
```

```
.babelrc增加对react及浏览器的支持
{
    "presets":['@babel/preset-react','@babel/preset-env']
}
```

## css,sass,less文件打包
安装对应npm包

``` 
css: npm i style-loader css-loader -D (大前提)
sass: npm i node-sass sass-loader -D
less: npm i less less-loader -D

webpack4不再支持extract-text-webpack-plugin对css进行拆分
两种解决方式
1. npm i -D extract-text-webpack-plugin@next
2. npm i -D mini-css-extract-plugin
```

```
使用extract-text-webpack-plugin@next 拆分less和sass
{
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{ loader: 'css-loader' }, { loader: 'less-loader' }]
    })
},{
    test: /\.(scss|sass)$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }]
    })
},
```

webpack读取loader**从右至左**，因此loader加载顺序必须严格按照['style-loader','css-loader','less-loader'/'sass-loader']

## 使用CSS Modules设置样式
```
{
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
        {
            loader: 'css-loader',
            options: {
            modules: true,
            }
        },
        { loader: 'less-loader' }
        ]
    })
}

页面引入就需要进行修改

import './styles.less'; ===>  import styles from './styles.less';

<div className="font"/> ===> <div className={styles.font}/>

```

## classnames的使用
```
若需要定义多个className
npm i -D classnames

页面使用
import classNames from 'classnames';
<div className={classNames(styles.font, styles.bg)}/>

```