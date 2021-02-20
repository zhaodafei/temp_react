// import { combineReducers } from 'redux' // 工具函数，用于组织多个reducer，并返回reducer集合

import defaultState from './state.js' // 定义默认值

/*
移动到 state.js 文件中
const defaultState = {
    inputValue: "请输入书名",
    bookList: [
        '论语',
        '史记',
        '左传',
    ]
};*/
/**
 * 使用:
 *    const action = {type: "", value: ""};    store.dispatch(action)
 * @param state
 * @param action  取值: {type: "", value: ""}
 * @returns {{inputValue: string, bookList: string[]}}
 */
export default (state = defaultState, action) => {
    console.log(state,action);
    if (action.type === "newTypeFun") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;  
        console.log("修改完成");
        
        return newState;
    }
    return state;
}





/*
function foo(state = defaultState, action) {
    console.log("我是foo");
    return state;
}

export default combineReducers({
    foo,
})*/
