import React from 'react';
import {Link} from "react-router-dom";

import { Form, Input, Button } from 'antd';
const layout = { labelCol: {span: 8,}, wrapperCol: {span: 16,},};
const tailLayout = {wrapperCol: {offset: 8, span: 16,},};


export default class BookAdd extends React.Component {
    state = {
        bookAdd: {
            name: 'web图书',
            price: '100',
            author: 'web作者',
        }
    };
    
    formRef = React.createRef();
    
    onFinish = (values) => {
        console.log(values);
        let params = {
            name: values.bookName,
            price: values.bookPrice,
            author: values.bookAuthor,
        };

        global.$post(global.$interfacres.book_add, params).then((res) => {
            if (res.error === 0) {
                alert("添加ok");
                this.props.history.push("/http-book-index", {foo: ' 我是参数值foo',bookAddResult:"图书添加成功"}); //  接受: this.props.location.state.foo
                // this.props.history.push({pathname: '/http-book-index', state: {fei: '我是参数值',bookAddResult:"图书添加成功"}}); // 接受: this.props.location.state.fei
            } else {
                alert("添加失败");
            }
        });
    };
    onReset = () => {
        this.formRef.current.resetFields();
    };
    onFill = () => {
        this.formRef.current.setFieldsValue({
            bookName: 'web图书',
            bookPrice: 100,
            bookAuthor: 'web作者',
        });
    };


    submitData = (e) => {
        e.preventDefault();

        let params = {
            name: this.state.bookAdd.name,
            price: this.state.bookAdd.price,
            author: this.state.bookAdd.author,
        };
        
        global.$post(global.$interfacres.book_add, params).then((res) => {
            if (res.error === 0) {
                alert("添加ok");
                // this.props.history.push("/http-book-index", {foo: ' 我是参数值foo',bookAddResult:"图书添加成功"}); //  接受: this.props.location.state.foo
                this.props.history.push({pathname: '/http-book-index', state: {fei: '我是参数值',bookAddResult:"图书添加成功"}}); // 接受: this.props.location.state.fei
            } else {
                alert("添加失败");
            }
        });
    };
    
    render() {
        
        return (
            <div>
                <h3 className="h3-title-name">我是 bookAdd 图书添加</h3>
                <div className="main-url">
                    <Link to="/">首页-Home</Link>
                    <Link to="/http-index">首页-Page</Link>
                    <Link to="/http-book-index">返回图书列表</Link>
                </div>
                <br/><br/>
                name   price   author
               <div>
                   <Button type="primary" onClick={this.submitData}>添加图书</Button>
               </div>
                <div>
                    <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                        <Form.Item name="bookName" label="书名" rules={[{required: true,},]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="bookPrice" label="价格" rules={[{required: true,},]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="bookAuthor" label="作者" rules={[{required: true,},]}>
                            <Input />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button htmlType="button" onClick={this.onReset}>
                                Reset
                            </Button>
                            <Button type="link" htmlType="button" onClick={this.onFill}>
                                Fill form
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
