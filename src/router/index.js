import VueRouter from 'vue-router'
import BlankPage from '../view/BlankPage.vue'
const router = new VueRouter({
    mode: 'history',
    routes: [
        //重定向操作
        { path: '', redirect: '/BlankPage' },
        { path: '/BlankPage', component: BlankPage }

    ]
})
export default router