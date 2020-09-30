<template>
	<div class="readers">
        <div class="readers-control">
            <a href="">信息录入</a>
            <a href="">信息修改</a>
            <a href="">借阅记录</a>
            <input type="text" class="readers-search" placeholder="输入读者编号、姓名或证件号">
        </div>
        <div class="readers-msg">
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
</script>

<style>
    .readers {
        height: 100%;
    }

    .readers-control {
        position: relative;
        padding: 10px 0;
        border-bottom: 2px solid #555;
        /* text-align: center; */
    }

    .readers-control a:nth-child(1) {
        margin-left: 164px;
    }

    .readers-control a {
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

    .readers-control a:hover {
        background: #888;
        color: #fff;
    }

    .readers-search {
        position: absolute;
        top: 7px;
        right: 48px;
        box-sizing: border-box;
        width: 50%;
        height: 40px;
        padding: 5px 5px 5px 30px;
        border: 0;
        border-bottom: 1px solid #e3e3e3;
        font-size: 16px;
    }

    .readers-msg {
        height: 615px;
    }

    .readers-msg table {
        width: 100%;
    }

    /* .readers-msg thead td {
        height: 35px;
        border:1px solid #d3d3d3;
        background: #f1f1f1;
        text-align: center;
    } */
</style>