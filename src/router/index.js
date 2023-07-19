import { createRouter, createWebHistory } from 'vue-router'
import App from '../views/APP.vue'
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            //首页-
            path: '/',
            name: 'home',
            component: App
        },
        { //业务一1-1
            path: '/business1',
            name: 'business1',
            component: () =>
                import ('../views/yihu.vue')
        }, { //业务二1-2
            path: '/business2',
            name: 'business2',
            component: () =>
                import ('../views/news.vue')
        }, { //业务三1-3
            path: '/business3',
            name: 'business3',
            component: () =>
                import ('../views/news.vue')
        }, { //公司新闻2-
            path: '/news',
            name: 'news',
            component: () =>
                import ('../views/news.vue')
        }, { //解决方案3-
            path: '/solution',
            name: 'solution',
            component: () =>
                import ('../views/solution.vue')
        }, { //公司概况4-1
            path: '/overview',
            name: 'overview',
            component: () =>
                import ('../views/companyoverview.vue')
        }, { //企业文化4-2
            path: '/culture',
            name: 'culture',
            component: () =>
                import ('../views/corporateculture.vue')
        }, { //招聘信息5-1
            path: '/joinmsg',
            name: 'joinmsg',
            component: () =>
                import ('../views/joinmsg.vue')
        }, { //联系我们5-2
            path: '/contactus',
            name: 'contactus',
            component: () =>
                import ('../views/contactus.vue')
        },
        //英文页面路由  ******************************************************      
        { //英文首页
            path: '/enapp',
            name: 'enapp',
            component: () =>
                import ('../enviews/APPEN.vue')
        },
        { //公司新闻（en）
            path: '/ennews',
            name: 'ennews',
            component: () =>
                import ('../enviews/news.vue')
        }, { //公司概况4-1
            path: '/enoverview',
            name: 'enoverview',
            component: () =>
                import ('../enviews/companyoverview.vue')
        }

    ]
})

export default router