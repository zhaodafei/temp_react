// 待使用....
// actions.js
// todo: action也是函数????????

export function setPageTitle (data) { // todo: 什么时候调用 ???
    return (dispatch, getState) => {
        // console.log("1111111111111111111");
        dispatch({ type: 'SET_PAGE_TITLE', data: data })
    }
}

export function actionFeiValue(value) {
    return (dispatch, getState) => {
        // console.log("222222222222222222");
        dispatch({type: "SET_NEW_TYPE_FUN", data: value});
    };
}


export function setBookList (data) {
    return (dispatch, getState) => {
        // console.log("33333333333333");
        // 可以使用ajax 请求
        dispatch({ type: 'SET_BOOK_LIST_FUN', data: data })
    }
}