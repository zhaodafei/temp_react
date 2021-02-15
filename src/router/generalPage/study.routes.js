import generalIndex from '../../views/generalPage/index.jsx';
import generalStudy01 from "../../views/generalPage/study01.jsx";

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
];

export default studyRoutes;