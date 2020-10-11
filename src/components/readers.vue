<template>
	<div class="readers">
        <div class="readers-control">
            <router-link to='/readers/newReader' @click.native="readerCR = false">信息录入</router-link>
            <a href="javascript:;" @click="reviseReader">信息修改</a>
            <!-- <router-link :to='{ name:"reviseReader", params:{ id: readerId } }' @click.native="getReaderDetail">信息修改</router-link> -->
            <router-link to='/readers' @click.native="getReaders">信息查看</router-link>
            <a href="javascript:;" @click="getReaderBorrow">借阅记录</a>
            <!-- <router-link :to='{ name:"readerBorrow", params: { id: readerId } }' @click.native="getReaderBorrow">借阅记录</router-link> -->
            <input type="text" class="readers-search" placeholder="输入读者编号、姓名或证件号" v-model="searchMsg" @keydown="getSearchReader($event)">
        </div>
        <router-view :readerMsg='readerMsg' :borrowMsg="readerBorrow" :readerDetail="readerDetail" :readerCR="readerCR" @getReaderId="getReaderId"></router-view>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        mounted () {
            this.getReaders()
        },
        data () {
            return {
                readerMsg: [],
                readerId: '',
                readerBorrow: [],
                readerDetail: [],
                readerCR: false,
                searchMsg: ''
            }
        },
        methods: {
            // 获取全部读者信息
            getReaders () {
                axios.get('/readers').then(res =>
                    this.readerMsg = res.data
                )
            },

            // 获取子组件传递过来的读者编号
            getReaderId (data) {
                this.readerId = data
            },

            // 根据读者编号获取读者的借阅信息
            getReaderBorrow () {
                if (this.readerId) {
                    // 获取到读者 id 后获得改读者的借阅数据
                    axios.get('/readerBorrow', {
                        params: {
                            readerId: this.readerId
                        }
                    }).then(res => {
                        this.readerBorrow = res.data
                        // 路由跳转并传参
                        this.$router.push({
                            name: 'readerBorrow',
                            params: {
                                id: this.readerId
                            }
                        })
                    })
                } else {
                    alert('请选择读者')
                }
            },

            // 根据读者编号获取读者信息并跳转到修改页面
            reviseReader () {
                if (this.readerId) {
                    // 获取到读者 id 后获得改读者的信息
                    axios.get('/getReaderDetail', {
                        params: {
                            readerId: this.readerId
                        }
                    }).then(res => {
                        this.readerDetail = res.data
                        // 路由跳转并传参
                        this.$router.push({
                            name: 'reviseReader',
                            params: {
                                id: this.readerId
                            }
                        })
                    })
                    // 改变标志用来判断为修改页面
                    this.readerCR = true
                } else {
                    alert('请选择读者')
                }
            },

            // 获取搜索的读者数据
            getSearchReader (e) {
                if (e.keyCode == 13) {
                    // 按下回车时根据 input 中的内容查找数据
                    axios.get('/searchReader', {
                        params: {
                            searchMsg: this.searchMsg
                        }
                    }).then(res => {
                        // 判断结果是否为空
                        if (Number(res.data) != 0) {
                            this.readerMsg = res.data
                            // 路由跳转
                            this.$router.push({
                                name: 'searchReader',
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

<style scope>
    .readers {
        height: 100%;
    }

    .readers-control {
        position: relative;
        padding: 10px 0;
        border-bottom: 2px solid #555;
        /* text-align: center; */
    }

    .readers-control a:nth-child(1) {
        margin-left: 132px;
    }

    .readers-control a {
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

    .readers-control a:hover {
        background-color: #e3e3e3;
    }

    .readers-search {
        position: absolute;
        top: 7px;
        right: 48px;
        box-sizing: border-box;
        width: 50%;
        height: 40px;
        padding: 5px 5px 5px 30px;
        border: 0;
        border-bottom: 1px solid #e3e3e3;
        font-size: 16px;
        transition: border-bottom 0.1s linear;
    }

    .readers-search:focus {
        border-bottom: 1px solid #555;
    }

    .readers-content {
        height: 615px;
    }

    .readers-content table {
        width: 100%;
    }
</style>