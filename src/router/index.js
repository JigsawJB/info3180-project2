import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ('../views/AboutView.vue')
        },

        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('../views/LoginView.vue')

        },

        {
            path: '/logout',
            name: 'logout',
            component: () =>
                import ('../views/LoginView.vue')

        },

        {
            path: '/register',
            name: 'register',
            component: () =>
                import ('../views/RegisterView.vue')
        },
        {
            path: '/explore',
            name: 'explore',
            component: () =>
                import ('../views/ExploreView.vue')
        },
        {
            path: '/users/{user_id}',
            name: 'singleuser',
            component: () =>
                import ('../views/UserView.vue')
        },
        {
            path: '/cars/new',
            name: 'newcar',
            component: () =>
                import ('../views/NewCarView.vue')
        },
        {
            path: '/cars/{card_id}',
            name: 'singlecarview',
            component: () =>
                import ('../views/SingleCarView.vue')
        },
    ]
})

export default router
