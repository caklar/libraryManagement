<template>
    <div class="bookMsg">
        <table>
            <thead>
                <tr>
                    <td>编号</td>
                    <td>名称</td>
                    <td>作者</td>
                    <td>分类</td>
                    <td>出版</td>
                </tr>
            </thead>
            <tbody>
                   <tr v-for="item in bookMsg" :key="item.id" @click='getBookId($event)'>
                    <td>{{ item.book_id }}</td>
                    <td>{{ item.book_name }}</td>
                    <td>{{ item.author }}</td>
                    <td>{{ item.classify }}</td>
                    <td>{{ item.publish }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data () {
            return {
                bookId: ''
            }
        },
        methods: {
            // 获取当前点击行的书籍编号并传递给父组件
            getBookId (e) {
                this.bookId = e.currentTarget.firstElementChild.innerText
                this.$emit('getBookId', this.bookId)
            },
            // 点击当前行时改变其样式
            currentRow (e) {
                e.currentTarget.styles = 'currentRow'
            }
        },
        props: ['bookMsg']
    }
</script>

<style scoped>
    .bookMsg {
        height: 100%;
        overflow: auto;
    }

    .bookMsg table {
        width: 100%;
    }

    .currentRow {
        background-color: #555;
    }
</style>
