// import React from 'react';
import App from '../App';
import Home from '../views/Home';
import H404 from '../views/404';

// 导入其他文件下面的路由
const otherRoutes = [];

function importALL() {
    let context = require.context("./", true, /\.routes\.js/);

    context.keys().forEach(key => {
        context(key).default.forEach(r => {
            otherRoutes.push(r);
        });
    });
}

importALL();

const BasicRoute = [
    {
        // 官方提供的demo,
        path: "/",
        exact:true,
        component: App
    },
    {
        // http://localhost:3000/Home
        path: "/Home",
        exact:true,
        component: Home
    },
    {
        // http://localhost:3000/H404
        path: "/H404",
        component: H404
    },
    ...otherRoutes
]
export default BasicRoute;