import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default class generalDetail extends React.Component {
    state = {
        bookDetail: {}, //图书详细
        showData: false
    };

    handleClick = () => {
        console.log('开始___handleClick');
        // console.log(global.$interfacres.getBookDetail);
        // console.log(process.env.REACT_APP_BASE_URL);
        global.$get(global.$interfacres.getBookDetail,{bookId: 3}).then(res => {
            console.log(res.data);
            this.setState({
                showData : true,
                bookDetail: res.data
            })
        });
    };

    componentDidMount() { // todo:生命周期
        // this.handleClick();
    }

    render() {
        let bookDetail_temp=(<span>暂时没有数据</span>);
        if (this.state.showData) { // todo: 判断
            bookDetail_temp = (
                <ul>
                    <li>ID: {this.state.bookDetail.id}</li>
                    <li>姓名: {this.state.bookDetail.name}</li>
                    <li>价格: {this.state.bookDetail.price}</li>
                    <li>作者: {this.state.bookDetail.author}</li>
                    <li>时间: {this.state.bookDetail.create_time}</li>
                </ul>
            );
        }
        return (
            <div>
                <h3 className="h3-title-name">我是http detail01 图书详细</h3>
                <div className="main-url">
                    <Link to="/">首页-Home</Link>
                    <Link to="/http-index">首页-Page</Link>
                </div>
                <div>
                    <Button type="primary" onClick={this.handleClick}>获取图书详细</Button>
                    <p className="h3-title-name"><span>免得登录测试接口</span> http://demo.yizheng_fei.com/api/user/detail?bookId=3</p>
                </div>
                <div id="book_detail">
                    <h4>这里是图书详细:</h4>
                    <ul>
                        <li>ID: {this.state.bookDetail.id}</li>
                        <li>姓名: {this.state.bookDetail.name}</li>
                        <li>价格: {this.state.bookDetail.price}</li>
                        <li>作者: {this.state.bookDetail.author}</li>
                        <li>时间: {this.state.bookDetail.create_time}</li>
                    </ul>
                    <div>
                        {this.state.showData ? (
                            <ul>
                                <li>ID: {this.state.bookDetail.id}</li>
                                <li>姓名: {this.state.bookDetail.name}</li>
                                <li>价格: {this.state.bookDetail.price}</li>
                                <li>作者: {this.state.bookDetail.author}</li>
                                <li>时间: {this.state.bookDetail.create_time}</li>
                            </ul>
                        ) : "暂时没有数据"}
                    </div>
                    <div>

                    </div>
                    <div>
                        {bookDetail_temp}
                    </div>
                </div>
            </div>
        );
    }
    
}