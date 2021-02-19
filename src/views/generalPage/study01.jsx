import React from 'react';
import { Link } from 'react-router-dom';
import { Affix, Button } from 'antd';

export default class generalStudy01 extends React.Component {
    state = {
        top: 10,
        bottom: 10,
    };

    render() {
        return (
            <div>
                <h3 className="h3-title-name">我是 study01 页</h3>
                <div className="main-url">
                    <Link to="/">首页-Home</Link>
                    <Link to="/general-index">首页-Page</Link>
                </div>
                <div>
                    <h3 className="h3-title-name">top: {this.state.top}</h3>
                    <h3 className="h3-title-name">bottom: {this.state.bottom}</h3>
                </div>
                <div>
                    <Affix offsetTop={this.state.top}>
                        <Button
                            type="primary"
                            onClick={() => {
                                this.setState({
                                    top: this.state.top + 10,
                                });
                            }}
                        >
                            Affix top
                        </Button>
                    </Affix>
                    <br />
                    <Affix offsetBottom={this.state.bottom}>
                        <Button
                            type="primary"
                            onClick={() => {
                                this.setState({
                                    bottom: this.state.bottom + 10,
                                });
                            }}
                        >
                            Affix bottom
                        </Button>
                    </Affix>
                </div>
            </div>
        );
    }
}