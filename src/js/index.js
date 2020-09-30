import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入 css 样式
import Public from '../css/public.css'
import indexCss from '../css/index.css'

// 引入组件文件
import index from '../components/index.vue'
import books from '../components/books.vue'
import readers from '../components/readers.vue'
import borrow from '../components/borrow.vue'

// 设置路由规则
const router = new VueRouter({
    routes: [
        {
            path: '/books',
            component: books
        },
        {
            path: '/readers',
            component: readers
        },
        {
            path: '/borrow',
            component: borrow
        }
    ]
})

// 渲染
const app = new Vue ({
    el: '#app',
    render: c => c(index),
    router
})