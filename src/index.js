import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// dafei start
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import Router  from './router/router'
import './assets/css/common.css'
// import './assets/css/common2.scss' 需要另外安装 yarn add node-sass
// API 
import interfaces from './api/interfaces.js'
import './utils/axios_instance.js'
global.$interfacres = interfaces; // 定义接口常量


/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/
// 改为使用路由,并且去掉严格模式
ReactDOM.render(
    <BrowserRouter>
      {renderRoutes(Router)}
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
