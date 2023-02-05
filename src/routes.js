import {createWebHistory,createRouter} from 'vue-router';
import Home from '@/components/Home.vue';
import Profile from '@/components/Profile.vue';

const routes=[
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'Profile',
        path:'/profile/:username',
        component:Profile
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;