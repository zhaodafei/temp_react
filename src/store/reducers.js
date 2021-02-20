import defaultState from './state.js' // 定义默认值

/**
 * 使用:
 *    const action = {type: "", value: ""};    store.dispatch(action)
 *    
 *  问题: 
 *      todo:如果数据在这里改变后,可以响应到页面上就完美了 ??????
 * @param state
 * @param action  取值: {type: "", value: ""}
 * @returns {{inputValue: string, bookList: string[]}}
 */
export default (state = defaultState, action) => {
    console.log(state,action);
    if (action.type === "newTypeFun") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    return state;
}