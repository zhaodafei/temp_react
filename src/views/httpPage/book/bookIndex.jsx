import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Table, Pagination, Alert } from 'antd';


export default class BookIndex extends React.Component {
   
    state = {
        tableData: [],
        total: 0,
        page: 1,
        per_page: 10,
        bookAddResultShow: false, // 图书添加成功消息提醒
        bookAddResultMsg: '', // 图书添加成功消息提醒
        bookDetail: {}, // 我是图书详情
        bookId: '', // 图书id
        bookIds: '', // 图书id批量操作
    };
    
    componentDidMount() { // todo:生命周期
        if ( typeof(this.props.location.state)== "object") {
            console.log(this.props.location);
            console.log(this.props.location.state.foo);
            this.setState({
                bookAddResultShow:true,
                bookAddResultMsg : this.props.location.state.bookAddResult,
            })
        }
     
        console.log(this.state.page, this.state.per_page);
        this.getData(this.state.page,this.state.per_page);
    }

    handleClickAdd = () => {
        this.props.history.push("/http-book-add");
    };

    onchange = (page, pageSize) => {
        console.log("onchange",page, pageSize);
        this.getData(page,this.state.per_page);
    };

    onShowSizeChange = (page, pageSize) => {
        console.log("onShowSizeChange",page, pageSize);
        this.getData(page,this.state.per_page);
    };

    getData = (page, pageSize) => {
        let params = {
            page:page,
            per_page: pageSize
        };
        global.$get(global.$interfacres.book_list, params).then(res => {
            console.log(res.data);
            if (Number(page) === 1) {
                // alert(`初始化__获取列表成功,总条数 ${res.page_count}`);
            }else{
                alert(`获取列表成功,总条数 ${res.page_count}`);
            }
            
            this.setState({
                tableData : res.data,
                total: res.page_count
            })
        });
    };
    
    render() {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '书名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '价格',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: '作者',
                dataIndex: 'author',
                key: 'author',
            },
            {
                title: '添加时间',
                dataIndex: 'create_time',
                key: 'create_time',
            },
        ];
        return (
            <div>
                <h3 className="h3-title-name">我是 bookIndex 图书列表</h3>
                <div className="main-url">
                    <Link to="/">首页-Home</Link>
                    <Link to="/http-index">首页-Page</Link>
                </div>
                <br/><br/>
                <div>
                    <Button type="primary" onClick={this.handleClickAdd}>添加</Button> &nbsp;&nbsp;&nbsp;
                    <Button type="danger" onClick={this.handleClickAdd}>删除....</Button>
                </div>
                <div>
                    <div>
                        <h3 className="h3-title-name">总条数: {this.state.total}</h3>
                        {this.state.bookAddResultShow ? (
                            <Alert message={this.state.bookAddResultMsg} type="success"/>) : "提示信息: "}
                    </div>

                    <Table dataSource={this.state.tableData} columns={columns} rowKey={record => record.id}
                           pagination={false}/>;
                    <Pagination
                        showSizeChanger
                        onShowSizeChange={this.onShowSizeChange}
                        onChange={this.onchange}
                        defaultCurrent={1}
                        current={typeof page == 'undefined' ? 1 : this.state.page}
                        total={this.state.total}
                        showQuickJumper={false}
                        style={{marginTop: "20px", float: "right"}}
                    />

                </div>
            </div>
        );
    }
}