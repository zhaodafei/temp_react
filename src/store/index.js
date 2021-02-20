/**
 * 创建store实例
 * 
 * 
 *  ### redux
 *  状态管理工具，与React没有任何关系，其他UI框架也可以使用Redux
 *  createStore: 用于创建store实例
 *  applyMiddleware: redux通过该函数来使用中间件
 * 
 *  ### react-redux
 *      React插件，作用：方便在React项目中使用Redux
 *      
 *  ### thunk 中间件; (作用：支持异步action)
 *  作用:
 *      如果不使用该中间件，当我们dispatch一个action时，需要给dispatch函数传入action对象；
 *      但如果我们使用了这个中间件，那么就可以传入一个函数，这个函数接收两个参数: dispatch和getState。
 *          这个dispatch可以在将来的异步请求完成后使用，对于异步action很有用
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers.js' // 引入reducer

const store = createStore(reducers, applyMiddleware(thunk));

export default store;