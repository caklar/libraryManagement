<template>
    <div class="readerMsg">
        <table>
            <thead>
                <tr>
                    <td>编号</td>
                    <td>姓名</td>
                    <td>性别</td>
                    <td>证件号</td>
                    <td>联系方式</td>
                </tr>
            </thead>
            <tbody>
                   <tr v-for="item in readerMsg" :key="item.id" @click="getReaderId($event)">
                    <td>{{ item.reader_id }}</td>
                    <td>{{ item.reader_name }}</td>
                    <td>{{ item.sex }}</td>
                    <td>{{ item.num }}</td>
                    <td>{{ item.phone }}</td>
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
                readerId: ''
            }
        },
        methods: {
            // 获取点击行的读者编号并传递给父组件
            getReaderId (e) {
                this.readerId = e.currentTarget.firstElementChild.innerText
                this.$emit('getReaderId', this.readerId)
            },
        },
        props: ['readerMsg']
    }
</script>

<style scoped>
    .readerMsg table {
        width: 100%;
    }
</style>
