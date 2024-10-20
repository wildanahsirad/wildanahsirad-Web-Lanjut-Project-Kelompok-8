import { createRouter, createWebHistory} from "vue-router";

import home from '../components/HomePage.vue'
import Login from '../components/Login.vue'
import notFound from '../components/NotFoundPage.vue'
// import { def } from "@vue/shared";


const routes = [

    {
        path: '/',
        component: home
    },
    {
        path: '/login',
        component: Login
    },
    // {
    //     path: '/',
    //     component: about
    // }
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
})

export default router