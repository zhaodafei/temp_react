import React from 'react';
import { Link } from 'react-router-dom';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            base_url: 'http://demo.yizheng_fei.com/api/',
            hello: "我是generalPage页__hello"
        };
    }

    render() {
        return (
            <div id="index">
                <div style={{ color: 'red' }}><h3>我是generalPage页</h3></div>
                <p>{this.state.hello}</p>
                <div className="main-url">
                    <Link to="/"><div>首页-Home</div></Link>
                    <Link to="/general-study01"><div>组件测试</div></Link>
                </div>
            </div>
        )
    }
}