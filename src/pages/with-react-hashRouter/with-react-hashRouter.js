'use strict';
//引入样式文件
//引入组件
import './with-react-hashRouter.scss';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import ReactDom from 'react-dom';
import App from './app';

let inBrowser = typeof window !== 'undefined';
console.log('当前环境是：' + process.env.NODE_ENV);
let ReactRender = process.env.NODE_ENV == 'development' ? ReactDom.render : ReactDom.hydrate;
inBrowser &&
    ReactRender(
        <Router basename="/hmbird_router/with-react-hashRouter">
            <App />
        </Router>,
        document.getElementById('app')
    );
module.exports = App;
