import React from 'react';
import { Link } from 'react-router-dom';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            base_url: 'http://demo.yizheng_fei.com/api/',
            base_url22: process.env.REACT_APP_BASE_URL, // process.env.REACT_APP_BASE_URL
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log("sss");
        global.$get(global.$interfacres.getBookDetail,{bookId: 3}).then(res => {
            console.log("基础环境已经ok");
        });
    }
    
    
    render() {
        return (
            <div id="index">
                <div style={{ color: 'red' }}><h3>我是httpPage页</h3></div>
                <div>
                    aaa { this.state.base_url22 } ddddd
                    <div>{global.constants}</div>
                    <div><button onClick={this.handleClick}>点击我</button></div>
                </div>
                
                <div className="main-url">
                    <Link to="/"><div>首页-Home</div></Link>
                    <Link to="/http-detail"><div>图书详细</div></Link>
                </div>
                <div className="main-url">
                    <Link to="/http-login"><div>登录</div></Link>
                    <Link to="/http-login"><div>退出登录</div></Link>
                    <Link to="/http-book-index"><div>已经登录--进入图书列表</div></Link>
                    <Link to="/http-book-add"><div>已经登录--进入图书添加</div></Link>
                </div>
                <div>
                    <p>用户登录: { this.state.base_url }user/login </p>
                    <p>数据获取地址: { this.state.base_url }book/list?per_page=6 </p>
                    <p>数据添加地址: { this.state.base_url }book/add </p>
                    <p>数据详情地址: { this.state.base_url }book/detail?id=3 </p>
                    <p>数据删除地址: { this.state.base_url }book/del?id=5 </p><br/>
                    <p>免登陆数据详情地址: { this.state.base_url }user/detail?id=3 </p>
                </div>
            </div>
        )
    }
}