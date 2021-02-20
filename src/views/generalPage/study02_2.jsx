import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Pagination, Button } from 'antd';

export default class study02 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 2,
            total: 70,
            num: 20
        };
        this.handleClickAdd = this.handleClickAdd.bind(this);
    }
    
    handleClickAdd () { // 这样写法必须在 constructor 中绑定
        this.setState({
            num: this.state.num + 1
        })
    };
    
    handleClickReduce = () => {
        let {num} = this.state;
        num--;
        this.setState({num});
    };
    
    render() {
        // '论语', '史记', '左传', '汉书', '战国策'
        // '孔子', '司马迁', '左丘明', '班固', '未知'
        const dataSource = [
            {
                key: '1',
                name: '论语',
                price: 32,
                author: '孔子',
            },
            {
                key: '2',
                name: '史记',
                price: 42,
                author: '司马迁',
            },
        ];

        const columns = [
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
        ];
        return (
            <div>
                <h3 className="h3-title-name">我是 study02 页</h3>
                <div className="main-url">
                    <Link to="/">首页-Home</Link>
                    <Link to="/general-index">首页-Page</Link>
                </div>
                <div>
                    <div>
                        <Button type="primary" onClick={this.handleClickAdd}>增加</Button> &nbsp;&nbsp;&nbsp;
                        <Button type="danger" onClick={this.handleClickReduce}>减少</Button>
                        <div>
                            点击总数: <Button type="primary" shape="circle">{this.state.num} </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <Table dataSource={dataSource} columns={columns} />;
                    <Pagination defaultCurrent={this.state.current} total={this.state.total} />
                </div>
            </div>
        );
    }
}