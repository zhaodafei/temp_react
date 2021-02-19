import React from 'react';
import {Link} from "react-router-dom";
import { Button } from 'antd';

export default class Login extends React.Component {
    state = {
        mobile: '12345678912',
        password: '123456'
    };

    handleClick = () => {
        global.$post(global.$interfacres.userLogin, {
            account_name: this.state.mobile,
            password: this.state.password,
        }).then(res => {
            if (res) {
                if (res.error === 0) {
                    let user = {
                        authorization: res.data.token_type + ' ' + res.data.access_token,
                        username: this.state.mobile,
                        password: this.state.password,
                    };
                    sessionStorage.setItem('user', JSON.stringify(user));
                    
                    this.props.history.push("/http-book-index"); // 提交后的跳转地址
                }else {
                    alert("登录失败")
                }
            }
        });
    };
    handleChangeMobile = (event) => {
        const mobile = event.target.value;
        this.setState({mobile});
    };
    handleChangePassword = (event) => {
        const password = event.target.value;
        this.setState({password});
    };
    render() {
        return (
            <div>
                <h3 style={{ color: 'red' }}>大飞图书-登录系统</h3>
                <div className="main-url">
                    <Link to="/">首页-Home</Link>
                    <Link to="/http-index">首页-Page</Link>
                </div>
                <div>
                    <label htmlFor="foo">账号: </label>
                    <input type="text" id="mobile" value={this.state.mobile} onChange={this.handleChangeMobile} />
                    <br/><br/>
                    <label htmlFor="password">密码: </label>
                    <input type="text" id="password" value={this.state.password} onChange={this.handleChangePassword}/>
                    <br/><br/>
                    <Button type="primary" onClick={this.handleClick}>登录</Button>
                </div>
            </div>
        )
    }
}