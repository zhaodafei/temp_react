/***
 * connect方法的作用：
 *  将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
 */
import React, {Component} from 'react';
import {Form, Button, Input, List} from 'antd';

import { connect } from 'react-redux'
import { setPageTitle, actionFeiValue,setBookList } from '../store/actions.js' // 引入action

// mapStateToProps：将 state 映射到组件的props中
const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
        feiValue: state.feiValue,
        bookList: state.bookList,
    }
};

// mapDispatchToProps 将 ../store/actions.js 映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
    // console.log("mapDispatchToProps",dispatch);
    return {
        setPageTitle (data) {  // 这个名字随意定义 ???
            // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
            dispatch(setPageTitle(data)); // 触发 src/store/actions.js setPageTitle
            // 执行setPageTitle会返回一个函数
            // 这正是redux-thunk的所用之处:异步action
            // 上行代码相当于
            /*dispatch((dispatch, getState) => {
                dispatch({type: 'SET_PAGE_TITLE', data: data})
            })*/
        },

        actionFeiValue(data) { // 这个名字随意定义 ???
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
        },

        foo() {
            console.log("恭喜你修改成功");
            dispatch(actionFeiValue("click__修改值")); // 触发 src/store/actions.js actionFeiValue
            /*dispatch((dispatch, getState) => {
                dispatch({type: 'SET_NEW_TYPE_FUN', data: data})
            })*/
        },
        
        bar() {
            console.log("bar___bar",this);
            /*this.formRef.current.setFieldsValue({
                bookName: 'Hello world!',
            });*/
            
            dispatch(setBookList("data_list")); // 触发 src/store/actions.js  setBookList
            /* dispatch((dispatch, getState) => {
                 console.log("aaaaaaaaaaaaaaaa");
                 dispatch({type: 'SET_BOOK_LIST_FUN', data: data})
             })*/
        }
    }
};

class FeiFoo extends Component {
    
    formRef = React.createRef();
    
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
        const {pageTitle, feiValue, resFeiValue, bookList, foo} = this.props;
        return (
            <div>
                <div>
                    <h2 className="h3-title-name">{[pageTitle]}</h2>
                    <Button type="primary" shape="circle" onClick={this.props.foo} >修改 FeiValue 的值</Button> {/* 这样会自动执行:  onClick={this.props.foo('xyz')} */}
                    <Button type="primary" shape="circle" onClick={foo} >修改 FeiValue 的值</Button>
                </div>
                <div>
                    <h3>显示1: {feiValue} ___  显示2: {resFeiValue||"没有值"}</h3>
                    
                    <Form ref={this.formRef} name="control-ref" id="FeiFoo">
                        <Form.Item name="bookName" label={feiValue} rules={[{required: false,},]}>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.props.bar}>
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