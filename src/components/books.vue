<template>
	<div class="books">
        <aside class="books-class">
            <a href="">123</a>
            <a href="">123</a>
            <a href="">123</a>
            <a href="">123</a>
            <a href="">123</a>
        </aside>
        <div class="books-res">
            <div class="books-control">
                <a href="">图书信息录入</a>
                <a href="">图书信息修改</a>
                <a href="">详细信息查询</a>
                <input type="text" class="books-search" placeholder="输入书籍名称或编号">
            </div>
            <div class="books-msg">
                <table class="books-msg-table">
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

                    </tbody>
                </table>
            </div>
        </div>
        <!-- <div class="books-simple-msg">
            <h3>基本信息</h3>
            <div class="base">
                <table>
                    <tr>
                        <td>编号</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>名称</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>作者</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div> -->
    </div>
</template>

<script>
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
        position: absolute;
        left: 20%;
        width: 80%;
    }

    .books-control {
        position: relative;
        padding: 10px 0;
        border-bottom: 2px solid #555;
        /* text-align: center; */
    }

    .books-control a:nth-child(1) {
        margin-left: 48px;
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

    .books-msg-table {
        width: 100%;
    }

    /* .books-msg-table thead td {
        height: 35px;
        border:1px solid #e3e3e3;
        background: #f1f1f1;
    } */

    .books-simple-msg {
        float: right;
        width: 23%;
    }
</style>