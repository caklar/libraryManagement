<template>
    <div class="borrowMsg">
        <table>
            <thead>
                <tr>
                    <td>图书编号</td>
                    <td>图书名称</td>
                    <td>借阅人编号</td>
                    <td>借阅人</td>
                    <td>联系方式</td>
                    <td>借阅状态</td>
                </tr>
            </thead>
            <tbody>
                   <tr v-for="item in borrowMsg" :key="item.id">
                    <td>{{ item.book_id }}</td>
                    <td>{{ item.book_name }}</td>
                    <td>{{ item.reader_id }}</td>
                    <td>{{ item.reader_name }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: ['borrowMsg']
    }
</script>

<style scoped>
    .borrowMsg table {
        width: 100%;
    }
</style>
