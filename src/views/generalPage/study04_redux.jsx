import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Form, Input} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import FeiFoo from '../../components/FeiFoo.jsx' // 引入组件 FeiFoo
import { Provider } from 'react-redux'; // Provider 将store传递到每个项目中的组件中
import store from '../../store/index.js' // index.js 可以省略[ import store from '../../store' ]

export default class study02 extends React.Component {

    state = {
        foo: "hello fei",
        book_temp: ["a1",'b2','c3'],
    };
    
    // '论语', '史记', '左传', '汉书', '战国策'
    // '孔子', '司马迁', '左丘明', '班固', '未知'
    render() {
        return (
            <div>
                <h3 className="h3-title-name">我是 study04  页</h3>
                <h4 className="h3-title-name">Redux 简单使用</h4>
                <div className="main-url">
                    <Link to="/">首页-Home</Link>
                    <Link to="/general-index">首页-Page</Link>  <br /><br />
                </div>
                <div>
                    <Button type="primary"  icon={<DownloadOutlined />}>
                        xxx xxx
                    </Button>
                </div>
                <div style={{width:"300px",margin:"10px",borderBottom:"2px solid red"}}>
                    <Form name="control-ref" id="feiStudy04">
                        <Form.Item name="feiStudy04" label="feiStudy04" rules={[{required: false,},]}>
                            <Input />
                        </Form.Item>
                    </Form>
                </div>
                <hr/>
                <div style={{width:"300px",margin:"10px"}}>

                    {/* 将store作为prop传入，即可使应用中的所有组件使用store */}
                    <Provider store = {store}>
                        <FeiFoo />
                    </Provider>
                    
                </div>
            </div>
        );
    }
}