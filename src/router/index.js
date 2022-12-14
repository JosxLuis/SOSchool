import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Classroom from '../views/Classroom.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/team',
        name: 'Team',
        component: Team
    },
    {
        path: '/classroom/:id',
        name: 'Classroom',
        component: Classroom
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router