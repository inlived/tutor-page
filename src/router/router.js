import Main from "@/pages/Main";
import FeedbackPage from "@/pages/FeedbackPage"
import {createRouter, createWebHistory} from 'vue-router'
import CoursesPage from "@/pages/CoursesPage";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/feedback',
        component: FeedbackPage
    },
    {
        path: '/courses',
        component: CoursesPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;

