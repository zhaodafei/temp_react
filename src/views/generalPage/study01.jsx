import React from 'react';
import {Link} from 'react-router-dom';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: '我是foo_study01',
        };
    }

    render() {
        return (
            <div id="index">
                <div style={{color: 'red'}}><h3>study01</h3></div>
                <p>{ this.state.foo }</p>
                <div>
                    <Link to="/"><div>首页-Home</div></Link>
                    <Link to="/general-index"><div>首页-Page</div></Link>
                </div>
                
                <div>
                    
                </div>
               
            </div>
        )
    }
}