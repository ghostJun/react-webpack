// 入口文件
import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css';
import Router from './router/router';
import {Provider} from 'react-redux';
import store from './store/store';


ReactDom.render(<Provider store={store}><Router/></Provider>, document.getElementById('root'));
