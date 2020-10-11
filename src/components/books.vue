<template>
	<div class="books">
        <div class="books-res">
            <div class="books-control">
                <router-link to='/books/newBook' @click.native="bookCR = false">信息录入</router-link>
                <a href="javascript:;" @click="reviseBook">信息修改</a>
                <!-- <router-link :to='{ name:"reviseBook", params:{ id:bookId } }' @click.native="reviseBook">信息修改</router-link> -->
                <router-link to='/books' @click.native="getBooks">信息查看</router-link>
                <a href="javascript:;" @click="getDetail">详细信息</a>
                <!-- <router-link :to='{ name:"bookDetail", params: { id: bookId } }' @click.native="getDetail">详细信息</router-link> -->
                <input type="text" class="books-search" placeholder="输入书籍信息" v-model="searchMsg" @keydown="getSearchBook($event)">
            </div>
            <router-view :bookMsg='bookMsg' :bookDetail="bookDetail" :bookCR="bookCR" @getBookId="getBookId"></router-view>
        </div>
    </div>
</template>

<script>
    import axios from'axios'
    
    export default {
        mounted () {
            this.getBooks()
        },
        data () {
            return {
                bookMsg: [],
                bookId: '',
                bookDetail: [],
                bookCR: false,
                searchMsg: ''
            }
        },
        methods: {
            // 获取全部书籍信息
            getBooks () {
                axios.get('/books').then(res =>
                    this.bookMsg = res.data
                )
            },

            // 获取子组件传递的读者 id
            getBookId (data) {
                this.bookId = data
            },

            // 根据编号获取书籍的具体信息
            getDetail () {
                if (this.bookId) {
                    // 根据读者 id 获取读者数据
                    axios.get('/getBookDetail', {
                        params: {
                            bookId: this.bookId
                        }
                    }).then(res => {
                        this.bookDetail = res.data
                        // 路由跳转
                        this.$router.push({
                            name: 'bookDetail',
                            params: {
                                id: this.bookId
                            }
                        })
                    })
                } else {
                    alert('请选择书籍')
                }
            },
            // 修改读者数据
            reviseBook () {
                if (this.bookId) {
                    // 根据读者 id 获取读者数据
                    axios.get('/getBookDetail', {
                        params: {
                            bookId: this.bookId
                        }
                    }).then(res => {
                        this.bookDetail = res.data
                        // 路由跳转
                        this.$router.push({
                            name: 'reviseBook',
                            params: {
                                id: this.bookId
                            }
                        })
                    })
                } else {
                    alert('请选择书籍')
                }
                // 根据标志判断为修改界面
                this.bookCR = true
            },

            // 获取搜索的读者数据
            getSearchBook (e) {
                if (e.keyCode == 13) {
                    // 按下回车时根据 input 中的内容查找数据
                    axios.get('/searchBook', {
                        params: {
                            searchMsg: this.searchMsg
                        }
                    }).then(res => {
                        // 判断结果是否为空
                        if (Number(res.data) != 0) {
                            this.bookMsg = res.data
                            // 路由跳转
                            this.$router.push({
                                name: 'searchBook',
                                params: {
                                    msg: this.searchMsg
                                }
                            })
                        } else {
                            alert('未查找到数据')
                        }
                    })
                }
            }
        }   
    }
</script>

<style scoped>
    .books {
        position: relative;
        height: 100%;
        box-sizing: border-box;
    }

    .books-class {
        float: left;
        width: 20%;
        height: 100%;
    }

    .books-res {
        width: 100%;
    }

    .books-control {
        position: relative;
        padding: 10px 0;
        border-bottom: 2px solid #555;
    }

    .books-control a:nth-child(1) {
        margin-left: 72px;
    }

    .books-control a {
        display: inline-block;
        height: 32px;
        margin: 0 5px;
        padding: 0 16px;
        border: 1px solid #555;
        font-size: 14px;
        font-weight: bold;
        line-height: 32px;
        text-align: center;
    }

    .books-control a:hover {
        background: #888;
        color: #fff;
    }

    .books-msg {
        height: 48px;
        text-align: center;
    }

    .books-search {
        position: absolute;
        box-sizing: border-box;
        top: 8px;
        right: 48px;
        width: 50%;
        height: 40px;
        margin-bottom: 5px;
        padding: 5px 5px 5px 30px;
        border: 0;
        border-bottom: 1px solid #e3e3e3;
        font-size: 16px;
    }

    .books-search:focus {
        border-bottom: 1px solid #555;
    }
</style>