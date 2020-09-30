<template>
	<div class="borrow">
        <div class="borrow-control">
            <a href="">图书借阅</a>
            <a href="">图书归还</a>
            <a href="">借阅记录</a>
            <a href="">逾期记录</a>
        </div>
        <div class="borrow-msg">
            <table>
                <thead>
                    <tr>
                        <td>图书编号</td>
                        <td>图书名称</td>
                        <td>借阅人</td>
                        <td>联系方式</td>
                        <td>借阅状态</td>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script>
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