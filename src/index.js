import React from 'react';
import ReactDOM from 'react-dom';
import interfaces from './api/interfaces.js'
import './utils/axios_instance.js'
import './index.css';
// import App from './App';
// import './assets/css/common.scss'
import reportWebVitals from './reportWebVitals';
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import Router  from './router/router'


// 定义接口常量
global.$interfacres = interfaces;

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
      <BrowserRouter>   {/* 路由 */}
          {renderRoutes(Router)}
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
