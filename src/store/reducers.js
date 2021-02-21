import { combineReducers } from 'redux' // 工具函数，用于组织多个reducer，并返回reducer集合
import defaultState from './state.js' // 定义默认值


/**
 * 说明:
 *      一个reducer就是一个函数,这里不能用 [ ajax, new data() 等等]
 *      
 * @param state  这里只能接受,不能改变
 * @param action  取值: {type: "", xxx: ""}
 * @returns {*}
 */
function pageTitle (state = defaultState.pageTitle, action) {
    // console.log("我是ok__pageTitle",action);
    // 不同的action有不同的处理逻辑
    switch (action.type) {
        case 'SET_PAGE_TITLE':
            return action.data;
        default:
            return state
    }
}

// function resFeiValue(state = defaultState.feiValue, action) {
function feiValue(state = defaultState.feiValue, action) { // todo: feiValue() 方法名字为啥和 defaultState.feiValue 一样???
    // console.log("我是ok__setFeiValue",action);
    switch (action.type) {
        case "SET_NEW_TYPE_FUN":
            return action.data;
        default:
            return state;
    }
}

function bookList (state = defaultState.bookList, action) {
    console.log("我是ok__pageTitle",action);
    // 不同的action有不同的处理逻辑
     switch (action.type) {
         case 'SET_BOOK_LIST_FUN':
             /*let newState = JSON.parse(JSON.stringify(state)); // 使用深拷贝
             newState.bookList.push(action.data);
             action.data = "";*/
             let newBookList = JSON.parse(JSON.stringify(state)); // 使用深拷贝
             newBookList.push(action.data);
             action.data = "";
             return newBookList;
         case 'DEL_BOOK_LIST_FUN':
             return state;
         default:
             return state
     }
}

// 导出所有reducer
export default combineReducers({
    feiValue,
    pageTitle,
    bookList,
})
