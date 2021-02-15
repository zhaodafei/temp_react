import React from 'react';
import {Link} from "react-router-dom";


export default class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <div style={{ color: 'red' }}><h3>我是Home首页</h3></div>
                <div className="main-url">
                    <Link to="/H404"><div>404</div></Link>
                    <p>HelloWorld</p>
                </div>
                <div className="main-url">
                    <Link to="/general-index"><div>非网络请求页面</div></Link>
                    <Link to="/http-index"><div>HTTP网络请求页面</div></Link>
                </div>
            </div>
        )
    }
}