<template>
    <div class="readerCR">
        <form action="/newReader" method="POST" v-if="!readerCR">
            <label>
                编号:
                <input type="text" class="msgInput" name="readerId">
            </label>
            <label>
                姓名:
                <input type="text" class="msgInput" name="readerName">
            </label>
                性别:
                <span class="sex">
                    <label>
                        男:
                        <input type="radio" name="sex" value="1" checked>
                    </label>
                    <label>
                        女:
                        <input type="radio" name="sex" value="0">
                    </label>
                </span>
            <label>
                证件号:
                <input type="text" class="msgInput" name="num">
            </label>
            <label>
                联系方式:
                <input type="text" class="msgInput" name="phone">
            </label>
            <input type="submit" value="提交" class="submit">
        </form>

        <form action="/reviseReaderMsg" method="POST" v-if="readerCR && readerDetail">
            <label>
                编号:
                <input type="text" class="msgInput" name="readerId" :value="readerDetail[0].reader_id" readonly>
            </label>
            <label>
                姓名:
                <input type="text" class="msgInput" name="readerName" :value="readerDetail[0].reader_name">
            </label>
                性别:
                <span class="sex">
                    <label>
                        男:
                        <input type="radio" name="sex" value="1" :checked="readerDetail[0].sex">
                    </label>
                    <label>
                        女:
                        <input type="radio" name="sex" value="0" :checked="!readerDetail[0].sex">
                    </label>
                </span>
            <label>
                证件号:
                <input type="text" class="msgInput" name="num" :value="readerDetail[0].num">
            </label>
            <label>
                联系方式:
                <input type="text" class="msgInput" name="phone" :value="readerDetail[0].phone">
            </label>
            <input type="submit" value="提交" class="submit">
        </form>
    </div>
</template>

<script>
    export default {
        props: [
            'readerDetail',
            'readerCR'
        ]
    }
</script>

<style scoped>
    .readerCR {
        width: 400px;
        margin: 64px auto 0;
        padding: 24px 32px;
    }

    .sex {
        display: inline-block;
        width: 100%;
        margin: 5px 0 20px;
    }

    .sex input {
        margin: 0 20px 0 10px;
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