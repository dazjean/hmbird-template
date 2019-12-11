'use strict';
import './with-react-hooks.scss';
import React from 'react';
import ReactDom from 'react-dom';
import APP from './page/UseReducer';
let inBrowser = typeof window !== 'undefined';
let ReactRender = process.env.NODE_ENV == 'development' ? ReactDom.render : ReactDom.hydrate;
inBrowser && ReactRender(<APP count="3" />, document.getElementById('app'));
module.exports = APP;
