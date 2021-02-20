/**
 * Redux
 * 状态管理工具，与React没有任何关系，其他UI框架也可以使用Redux
 * 
 * react-redux
 * React插件，作用：方便在React项目中使用Redux
 * 
 * react-thunk
 * 间件，作用：支持异步action
 */
import {createStore} from 'redux';
import reducers from './reducers.js'

const store = createStore(reducers);

export default store;