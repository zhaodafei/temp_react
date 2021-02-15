import httpIndex from '../../views/httpPage/index.jsx';
import httpDetail from '../../views/httpPage/detail.js';
import httpLogin from '../../views/httpPage/login.js';

import bookAdd from '../../views/httpPage/book/bookAdd.js';
import bookIndex from "../../views/httpPage/book/bookIndex.js";


const bookRoutes = [
    {
        // http://localhost:3000/http-index
        path: '/http-index',
        name: 'http-index',
        meta: {
            title: "http-index-title",
            content: "http-index-content",
            isLogin: false,
        },
        component: httpIndex,
    },
    {
        // http://localhost:3000/http-detail
        path: '/http-detail',
        name: 'http-detail',
        meta:{
            title: "http-detail-title",
            content: "http-detail-content",
            isLogin: false,
        },
        component: httpDetail,
    },
    {
        // http://localhost:3000/http-detail
        path: '/http-login',
        name: 'http-login',
        meta:{
            title: "http-login-title",
            content: "http-login-content",
            isLogin: false,
        },
        component: httpLogin,
    },
    {
        // http://localhost:3000/http-book-index
        path: '/http-book-index',
        name: 'http-book-index',
        meta:{
            title: "http-book-index-title",
            content: "http-book-index-content",
            isLogin: true,
        },
        component: bookIndex
    },
    {
        // http://localhost:3000/http-book-add
        path: '/http-book-add',
        name: 'http-book-add',
        meta:{
            title: "http-book-add-title",
            content: "http-book-add-content",
            isLogin: true,
        },
        component: bookAdd
    },
];

export default bookRoutes;