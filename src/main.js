import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/utils/rem'
// import VueRouter from 'vue-router'
// import router from './router/index'
import 'animate.css';
// import 'lib-flexible'
import App from './App.vue'
// import BlankPage from './view/BlankPage'
// import VueRouter from 'vue-router'
// import router from './router/index'

Vue.config.productionTip = false
    // Vue.use(VueRouter)
Vue.use(ElementUI);
new Vue({
    render: h => h(App),
    // router
}).$mount('#app')