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

## 配置热加载
```
引入webpack
const webpack = require('webpack');
插件中增加热加载
plugins: [
    new webpack.HotModuleReplacementPlugin()
]
devServer中打开热加载
devServer: {
    hot:true
}
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

## 图片引入
```
cnpm i file-loader -D
{
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
```

## 引入antd（配置中最大的坑）
```
npm i antd -D

关键点在于需要引入下面的包

npm i babel-plugin-import -D

在.babelrc中引入以下插件

"plugins": [
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "lib"
      },
      "ant"
    ]
  ]
  
在入口文件中引入antd.css

import 'antd/dist/antd.css';

-- done --
```

## 分环境打包配置
```
 cnpm i cross-env -D

"build:dev": "cross-env NODE_ENV=dev webpack --config build/webpack.dev.config.js"

```

## Redux React-Redux

### redux组成
1. action
2. state
3. reducer

```
// 引入redux
import {createStore} from 'redux';

// reducer
const countReducer = function(state = {count: 1}, action) {
    switch(action.type) {
        case 'COUNT_ADD':
            return {
                ...state, count: state.count + 1
            }
    }
        default: 
            return state
}

const store = createStore(countReducer);

console.log(store);
console.log(store.getState);


```

#### action

组成
1. type     用于区分是何种操作
2. payload  传递的数据

```
// dispatch 用于分发任务(store自带方法)
const action = {
    type: 'COUNT_ADD',
    payload: {}, 
}
store.dispatch(action);

```
