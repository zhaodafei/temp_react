import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, List } from 'antd';
import store from '../../store/index.js' // 同理: import store from '../../store'


export default class study02 extends React.Component {

    state = {
        foo: "hello fei",
        book_temp: ["a1",'b2','c3'],
        storeFei: store.getState(), // 引入 redux(store) 中的值
    };

    handleClickAdd = () => {
        const action = {type: "newTypeFun", value: "new_论语"};
        store.dispatch(action); 
        // console.log("修改完成",store.getState()); // 改变以后的值
        this.handelStoreChange();
    };
    handelStoreChange = () => {
        this.setState({
            storeFei: store.getState()
        })
    };

    // '论语', '史记', '左传', '汉书', '战国策'
    // '孔子', '司马迁', '左丘明', '班固', '未知'
    render() {
        const {inputValue,bookList} = store.getState();
        return (
            <div>
                <h3 className="h3-title-name">我是 study04 页</h3>
                <h4 className="h3-title-name">Redux 简单使用</h4>
                <div className="main-url">
                    <Link to="/">首页-Home</Link>
                    <Link to="/general-index">首页-Page</Link>  <br /><br />
                </div>
                <div>
                    <p>{this.state.storeFei.inputValue}</p>
                    书名: 
                    <Input placeholder={this.state.storeFei.inputValue} style={{width:"200px",marginRight:"10px"}} />
                    <Button type="primary" onClick={this.handleClickAdd}>
                        添加
                    </Button>
                </div>
                <div>{this.state.book_temp}</div>
                <div style={{width:"200px",margin:"10px"}}>
                    <List
                        header={<div style={{color: "#ffd700"}}>我是 Header</div>}
                        footer={<div style={{color: "#ffd700"}}>我是 Footer</div>}
                        dataSource={bookList}
                        renderItem={item => (
                            <List.Item>{item}</List.Item>
                        )}/>
                </div>
            </div>
        );
    }
}