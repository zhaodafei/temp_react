// 图书接口
// let domain = process.env.VUE_APP_BASE_URL;

let interfaces = {
    // 免登录接口测试
    // getBookDetail: domain + 'user/detail'
    getBookDetail: 'user/detail',
    // getBookDetail: 'api/user/detail',
    
    // 需要登录接口
    //***********
    book_add: 'book/add',
    book_list: 'book/list',
    book_del: 'book/del',
    book_detail: 'book/detail',
    //***********
    userLogin: "user/login", // 登录
    //***********
};

export default interfaces;