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
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/news.vue')
        }
    ]
})

export default router