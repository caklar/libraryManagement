<template>
    <div class="BR">
        <form action="/bookBorrow" method="POST" v-if="BR">
            <label>
                图书编号:
                <input type="text" class="msgInput" name="bookId">
            </label>
            <label>
                读者编号:
                <input type="text" class="msgInput" name="readerId">
            </label>
            <input type="submit" value="提交" class="submit">
        </form>

        <form action="/bookReturn" method="POST" v-if="!BR">
            <label>
                图书编号:
                <input type="text" class="msgInput" name="bookId">
            </label>
            <label>
                读者编号:
                <input type="text" class="msgInput" name="readerId">
            </label>
            <input type="submit" value="提交" class="submit">
        </form>
    </div>
</template>

<script>
    export default {
        props: ['BR']
    }
</script>

<style scoped>
    .BR {
        width: 400px;
        margin: 148px auto 0;
        padding: 24px 32px;
    }

    .submit {
        display: inline-block;
        width: 64px;
        height: 32px;
        margin: 10px 159px 0;
        border: 1px solid #555;
        background-color: #fff;
        cursor: pointer;
    }

    .submit:hover {
        background-color: #e3e3e3;
    }
</style>