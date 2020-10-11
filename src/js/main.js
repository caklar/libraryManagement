import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.devtools = true

Vue.use(VueRouter)

// 引入 css 样式
import Public from '../css/public.css'
import indexCss from '../css/index.css'

// 引入最外层组件
import index from '../components/Index.vue'

// 引入组件路由规则
import router from '../router/index.js'

// 渲染
const app = new Vue ({
    el: '#app',
    render: c => c(index),
    router
})