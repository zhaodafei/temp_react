/***
 * connect方法的作用：
 *  将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
 */
import React, {Component} from 'react';
import {Form, Button, Input, List} from 'antd';

import { connect } from 'react-redux'
import { setPageTitle, actionFeiValue,setBookList } from '../store/actions.js' // 引入action

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
        feiValue: state.feiValue,
        bookList: state.bookList,
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    // console.log("mapDispatchToProps",dispatch);
    return {
        setPageTitle (data) {  // todo: 这个名字随意定义 ???
            // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
            dispatch(setPageTitle(data)); // 触发 src/store/actions.js setPageTitle
            // 执行setPageTitle会返回一个函数
            // 这正是redux-thunk的所用之处:异步action
            // 上行代码相当于
            /*dispatch((dispatch, getState) => {
                dispatch({type: 'SET_PAGE_TITLE', data: data})
            })*/
        },

        actionFeiValue(data) { // todo: 这个名字随意定义 ???
            dispatch(actionFeiValue(data)); // 触发 src/store/actions.js actionFeiValue
            /*dispatch((dispatch, getState) => {
                dispatch({type: 'SET_NEW_TYPE_FUN', data: data})
            })*/
        },

        /**
         * 
         * @param data
         * @param feiFrom  检查谁调用这里(不影响项目功能)
         */
        setBookList(data, feiFrom) { // todo: ????????  当前页面 ↓↓↓
            console.log("data",data,feiFrom);
            dispatch(setBookList(data)); // 触发 src/store/actions.js  setBookList
           /* dispatch((dispatch, getState) => {
                console.log("aaaaaaaaaaaaaaaa");
                dispatch({type: 'SET_BOOK_LIST_FUN', data: data})
            })*/
        }
    }
};

class FeiFoo extends Component {
    componentDidMount () {
        // console.log("componentDidMount___",this.props);
        // let {setPageTitle, actionFeiValue, setBookList} = this.props;
        let {setPageTitle} = this.props;

        // 触发 mapDispatchToProps 中 setPageTitle
        setPageTitle('新的标题');

        // 触发 mapDispatchToProps 中 actionFeiValue
        // actionFeiValue("");
        
        // 触发 mapDispatchToProps 中 setBookList
        // setBookList([],"我调用的哪里");  // todo: ????????  当前页面(mapDispatchToProps 中) ↑↑↑
    }
    
    render() {
        // console.log("render___",this.props);
        const {pageTitle, feiValue, resFeiValue, bookList} = this.props;
        return (
            <div>
                <div>
                    <h2 className="h3-title-name">{[pageTitle]}</h2>
                    <Button type="primary" shape="circle">xxx</Button> {/* 这个会自动执行:  onClick={this.props.actionFeiValue('xyz')} */}
                </div>
                <div>
                    <h3>显示1: {feiValue} ___  显示2: {resFeiValue||"没有值"}</h3>
                    
                    <Form name="control-ref" id="FeiFoo">
                        <Form.Item name="bookName" label={feiValue} rules={[{required: false,},]}>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">
                                添加
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                
                <List
                    header={<div style={{color: "#ffd700"}}>我是 Header</div>}
                    footer={<div style={{color: "#ffd700"}}>我是 Footer</div>}
                    dataSource={bookList}
                    renderItem={item => (
                        <List.Item>{item}</List.Item>
                    )}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeiFoo); 