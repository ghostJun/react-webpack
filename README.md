# react-webpack
webpack4 配置学习

## 基本配置

## Html文件打包
安装html-webpack-plugin插件

``` 
npm i html-webpack-plugin -D 
```

## css,sass,less文件打包
安装对应npm包

``` 
css: npm i style-loader css-loader -D (大前提)
sass: npm i node-sass sass-loader -D
less: npm i less less-loader -D
```

## 安装Babel全家桶
Babel是一个javascript编译器，将es2015+代码转换为向后兼容版本的javascript代码

```
npm i -D @babel/core @babel/cli @babel/preset-env
npm i --save @babel/polyfill

若要实现对jsx和react的支持，还需要
npm i -D @babel/preset-react
```