import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Heroes from '../views/heroes/Heroes.vue'
import HeroShowcase from '../views/heroes/HeroShowcase.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: Heroes
    },
    {
        path: '/heroes/:heroName',
        name: 'HeroShowcase',
        component: HeroShowcase
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), routes
})

export default router