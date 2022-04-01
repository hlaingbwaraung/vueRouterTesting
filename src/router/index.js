import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import NotFound from '../views/NotFound.vue'
import JobDetail from '../views/jobs/JobDetail.vue'



const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/jobs',
        name: 'job',
        component: Jobs
    },
    {
        path: '/jobDetail/:id',
        name: 'jobDetail',
        component: JobDetail,
        props: true
    },
    //redirect
    {
        path: '/all-jobs',
        redirect: "/about"
    },
    //catchall
    {
        path: "/:catchAll(.*)",
        component: NotFound
    }

]

const router = createRouter({
    mode: 'history',
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router