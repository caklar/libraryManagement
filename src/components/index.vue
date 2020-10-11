<template>
    <div class="frame">
        <header class="header">
            <h1 class="sign">欢迎使用图书管理系统</h1>
            <div class="user">123</div>
        </header>
        <div class="content">
            <router-view></router-view>
        </div>
        <aside class="aside-nav">
            <router-link to="/home">首页</router-link>
            <router-link to="/books">图书管理</router-link>
            <router-link to="/readers">读者管理</router-link>
            <router-link to="/borrow">借阅管理</router-link>
            <a href="">数据统计</a>
        </aside>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    
</style>