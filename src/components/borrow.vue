<template>
	<div class="borrow">
        <div class="borrow-control">
            <router-link to="/borrow/bookBorrow" @click.native="BR = true">图书借阅</router-link>
            <router-link to="/borrow/bookReturn" @click.native="BR = false">图书归还</router-link>
            <router-link to="/borrow" @click.native="getBorrowMsg">借阅记录</router-link>
            <router-link to="/borrow/expireMsg" @click.native="getExpireMsg">逾期记录</router-link>
        </div>
        <router-view :borrowMsg="borrowMsg" :BR="BR"></router-view>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        mounted () {
            this.getBorrowMsg()
        },
        data () {
            return {
                borrowMsg: [],
                BR: true
            }
        },
        methods: {
            getBorrowMsg () {
                axios.get('/borrow').then(res =>
                    this.borrowMsg = res.data
                )
            },
            getExpireMsg () {
                axios.get('/expire').then(res =>
                    this.borrowMsg = res.data
                )
            }
        }
    }
</script>

<style>
    .borrow {
        height: 100%;
    }

    .borrow-control {
        position: relative;
        padding: 10px 0;
        border-bottom: 2px solid #555;
        text-align: center;
    }

    .borrow-control a {
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

    .borrow-control a:hover {
        background: #888;
        color: #fff;
    }

    .borrow-msg {
        height: 615px;
    }

    .borrow-msg table {
        width: 100%;
    }
</style>