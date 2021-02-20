import React from 'react';
import { Link,NavLink } from 'react-router-dom';

// 这是一个无状态组件,可以提升性能
const GeneralIndex = () => (
    <>
       <div>
           <h3 className="h3-title-name">我是generalPage页</h3>
           <div className="main-url">
               <NavLink to="/">首页-Home</NavLink>
               <Link to="/general-study01">组件测试___study01</Link>
               <span>我是scss控制样式</span>
           </div>
       </div>
    </>
);

export default GeneralIndex;