import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, List } from 'antd';
import store from '../../store/index.js' // 同理: import store from '../../store'


export default class study02 extends React.Component {

    state = {
        foo: "hello fei",
        bookList_temp: ["a",'b','c'],
        ...store.getState(), // 引入 redux(store) 中的值
    };

    handleClickAdd = () => {
        console.log('handleClickAdd');
        // store.dispatch({type:"ddd",data:"aaaaaaaaa"})
        const action = {type: "newTypeFun", value: "new_论语"};
        store.dispatch(action);
        console.log(store.getState()); // 改变以后的值
        // this.setState({...store.getState()}); // 解决页面中没有变化
    };
    
    render() {
        console.log(store.getState());
        console.log(this.state);
        // '论语', '史记', '左传', '汉书', '战国策'
        // '孔子', '司马迁', '左丘明', '班固', '未知'
        return (
            <div>
                <h3 className="h3-title-name">我是 study04 页</h3>
                <h4 className="h3-title-name">Redux 简单使用</h4>
                <div className="main-url">
                    <Link to="/">首页-Home</Link>
                    <Link to="/general-index">首页-Page</Link>  <br /><br />
                </div>
                <div>
                    书名: 
                    <Input placeholder={this.state.inputValue} style={{width:"200px",marginRight:"10px"}} />
                    <Button type="primary" onClick={this.handleClickAdd}>
                        添加        拖鞋,交易纠纷, 京东客服,  多久出结果
                    </Button>
                </div>
                <div style={{width:"200px",margin:"10px"}}>
                    <List
                        header={<div style={{color: "#ffd700"}}>我是 Header</div>}
                        footer={<div style={{color: "#ffd700"}}>我是 Footer</div>}
                        dataSource={this.state.bookList}
                        renderItem={item => (
                            <List.Item>{item}</List.Item>
                        )}/>
                </div>
            </div>
        );
    }
}