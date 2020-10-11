<template>
    <div class="bookCR">
        <form action="/newBook" method="POST" v-if="!bookCR">
            <label>
                编号:
                <input type="text" class="msgInput" name="bookId">
            </label>
            <label>
                名称:
                <input type="text" class="msgInput" name="bookName">
            </label>
            <label>
                作者:
                <input type="text" class="msgInput" name="author">
            </label>
            <label>
                分类:
                <input type="text" class="msgInput" name="classify">
            </label>
            <label>
                出版:
                <input type="text" class="msgInput" name="publish">
            </label>
            <input type="submit" value="提交" class="submit">
        </form>
        
        <form action="/reviseBookMsg" method="POST" v-if="bookCR">
            <label>
                编号:
                <input type="text" class="msgInput" name="bookId" :value="bookDetail[0].book_id" readonly>
            </label>
            <label>
                名称:
                <input type="text" class="msgInput" name="bookName" :value="bookDetail[0].book_name">
            </label>
            <label>
                作者:
                <input type="text" class="msgInput" name="author" :value="bookDetail[0].author">
            </label>
            <label>
                分类:
                <input type="text" class="msgInput" name="classify" :value="bookDetail[0].classify">
            </label>
            <label>
                出版:
                <input type="text" class="msgInput" name="publish" :value="bookDetail[0].publish">
            </label>
            <input type="submit" value="提交" class="submit">
        </form>
    </div>
</template>

<script>
    export default {
        props: [
            'bookDetail',
            'bookCR'
        ]
    }
</script>

<style scoped>
    .bookCR {
        width: 400px;
        margin: 32px auto 0;
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