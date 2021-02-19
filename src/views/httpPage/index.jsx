import React from 'react';
import { Link } from 'react-router-dom';


export default class generalStudy01 extends React.Component {
    state = {
        base_url: 'http://demo.yizheng_fei.com/api/',
        // base_url_env: process.env.REACT_APP_BASE_URL,
    };
    
    render() {
        return (
            <div>
                <h3 className="h3-title-name">我是 httpPage 页</h3>
                <div className="main-url">
                    <Link to="/">首页-Home</Link>
                    <Link to="/http-detail">图书详细</Link>
                </div>
                <div className="main-url">
                    <Link to="/http-login">登录__登录</Link>
                    <Link to="/http-login">退出登录</Link>
                    <Link to="/http-book-index">已经登录--进入图书列表</Link>
                    <Link to="/http-book-add">已经登录--进入图书添加</Link>
                </div>
                <div>
                    <p>用户登录: { this.state.base_url }user/login </p>
                    <p>数据获取地址: { this.state.base_url }book/list?per_page=6 </p>
                    <p>数据添加地址: { this.state.base_url }book/add </p>
                    <p>数据详情地址: { this.state.base_url }book/detail?id=3 </p>
                    <p>数据删除地址: { this.state.base_url }book/del?id=5 </p><br/>
                    <p className="h3-title-name">免登陆数据详情地址: { this.state.base_url }user/detail?id=3 </p>
                </div>
            </div>
        );
    }
}