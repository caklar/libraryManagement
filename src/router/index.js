import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

// 引入组件文件
import Home from '../components/HomePage.vue'
import Books from '../components/Books.vue'
import Readers from '../components/Readers.vue'
import Borrow from '../components/Borrow.vue'
import BookCR from '../components/BookCR.vue'
import BookMsg from '../components/BookMsg.vue'
import BookDetail from '../components/BookDetail.vue'
import ReaderMsg from '../components/ReaderMsg.vue'
import ReaderCR from '../components/ReaderCR.vue'
import BR from '../components/BR.vue'
import BorrowMsg from '../components/BorrowMsg.vue'

// 设置组件路由规则
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/books',
            component: Books,
            children: [
                {
                    path: '/books/newBook',
                    component: BookCR
                },
                {
                    path: '/books/reviseBook/:id',
                    name: 'reviseBook',
                    component: BookCR
                },
                {
                    path: '/books',
                    component: BookMsg
                },
                {
                    path: '/books/bookSearch',
                    component: BookMsg
                },
                {
                    path: '/books/bookDetail/:id',
                    name: 'bookDetail',
                    component: BookDetail
                },
                {
                    path: '/books/searchBook/:msg',
                    name: 'searchBook',
                    component: BookMsg
                }
            ],
        },
        {
            path: '/readers',
            component: Readers,
            children: [
                {
                    path: '/readers',
                    component: ReaderMsg
                },
                {
                    path: '/readers/newReader',
                    component: ReaderCR
                },
                {
                    path: '/readers/reviseReader/:id',
                    name: 'reviseReader',
                    component: ReaderCR
                },
                {
                    path: '/readers/readerSearch',
                    component: ReaderMsg
                },
                {
                    path: '/readers/readerBorrow/:id',
                    name: 'readerBorrow',
                    component: BorrowMsg
                },
                {
                    path: '/readers/searchReader/:msg',
                    name: 'searchReader',
                    component: ReaderMsg
                }
            ]
        },
        {
            path: '/borrow',
            component: Borrow,
            children: [
                {
                    path: '/borrow/bookBorrow',
                    component: BR
                },
                {
                    path: '/borrow/bookReturn',
                    component: BR
                },
                {
                    path: '/borrow',
                    component: BorrowMsg
                },
                {
                    path: '/borrow/expireMsg',
                    component: BorrowMsg
                }
            ]
        }
    ]
})

export default router