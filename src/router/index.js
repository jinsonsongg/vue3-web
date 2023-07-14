import { createRouter, createWebHistory } from 'vue-router'
import App from '../views/APP.vue'
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: App
        },
        {
            path: '/news',
            name: 'news',
            component: () =>
                import ('../views/news.vue')
        }, {
            path: '/joinmsg',
            name: 'joinmsg',
            component: () =>
                import ('../views/joinmsg.vue')
        }, {
            path: '/contactus',
            name: 'contactus',
            component: () =>
                import ('../views/contactus.vue')
        }

    ]
})

export default router