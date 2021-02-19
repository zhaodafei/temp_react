import generalIndex from '../../views/generalPage/index.jsx';
import generalStudy01 from "../../views/generalPage/study01.jsx";
import generalStudy02 from "../../views/generalPage/study02.jsx";
import generalStudy03 from "../../views/generalPage/study03.jsx";

const studyRoutes = [
    {
        path: '/general-index',
        name: 'general-index',
        meta:{
            title: "general-index-title",
            content: "general-index-content",
            isLogin: false,
        },
        component: generalIndex,
    },
    {
        path: '/general-study01',
        name: 'general-study01',
        meta:{
            title: "general-study01-title",
            content: "general-study01-content",
            isLogin: false,
        },
        component: generalStudy01,
    },
    {
        path: '/general-study02',
        name: 'general-study02',
        meta:{
            title: "general-study02-title",
            content: "general-study02-content",
            isLogin: false,
        },
        component: generalStudy02,
    },
    {
        path: '/general-study03',
        name: 'general-study03',
        meta:{
            title: "general-study03-title",
            content: "general-study03-content",
            isLogin: false,
        },
        component: generalStudy03,
    },
];

export default studyRoutes;