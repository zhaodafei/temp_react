import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;
const layout = { labelCol: {span: 8,}, wrapperCol: {span: 16,},};
const tailLayout = {wrapperCol: {offset: 8, span: 16,},};

export default class study03 extends React.Component {

    formRef = React.createRef();
    
    onGenderChange = (value) => {
        switch (value) {
            case 'male':
                this.formRef.current.setFieldsValue({
                    note: 'Hi, man!',
                });
                return;

            case 'female':
                this.formRef.current.setFieldsValue({
                    note: 'Hi, lady!',
                });
                return;

            case 'other':
                this.formRef.current.setFieldsValue({
                    note: 'Hi there!',
                });
                return;
        }
    };

    onFinish = (values) => {
        console.log(values);
    };
    onReset = () => {
        this.formRef.current.resetFields();
    };
    onFill = () => {
        this.formRef.current.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };
    
    render() {
        // '论语', '史记', '左传', '汉书', '战国策'
        // '孔子', '司马迁', '左丘明', '班固', '未知'
        return (
            <div>
                <h3 className="h3-title-name">我是 study02 页</h3>
                <div className="main-url">
                    <Link to="/">首页-Home</Link>
                    <Link to="/general-index">首页-Page</Link>
                </div>
             <div>
                 表单
                 <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                     <Form.Item name="note" label="Note" rules={[{required: true,},]}>
                         <Input />
                     </Form.Item>
                     <Form.Item name="gender" label="Gender" rules={[{required: true,},]}>
                         <Select
                             placeholder="Select a option and change input text above"
                             onChange={this.onGenderChange}
                             allowClear
                         >
                             <Option value="male">male</Option>
                             <Option value="female">female</Option>
                             <Option value="other">other</Option>
                         </Select>
                     </Form.Item>
                     <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}>
                         {({ getFieldValue }) => {
                             return getFieldValue('gender') === 'other' ? (
                                 <Form.Item name="customizeGender" label="Customize Gender" rules={[{required: true,},]}>
                                     <Input />
                                 </Form.Item>
                             ) : null;
                         }}
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
        );
    }
}