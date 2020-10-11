const express = require('express')
const url = require('url')
const fs = require('fs');
const model = require('./model');

const router = express.Router()

// 首页路由
router.get('/', (req, res) => {
    fs.readFile('./dist/index.html', function (err, data) {
        if (err) {
            return res.end('404 not found')
        }
        res.end(data)
    })
})

// 录入书籍信息
router.post('/newBook', (req, res) => {
    const data = []
    // 将对象值转化为数组
    for (let i in req.body) {
        data.push(req.body[i])
    }
    model.newBook(data)
})

// 修改书籍信息
router.post('/reviseBookMsg', (req, res) => {
    const data = req.body
    model.reviseBookMsg(data)
})

// 全部书籍信息
router.get('/books', (req, res) => {
    model.getBooks(msg =>
        res.send(msg)
    )
})

// 搜索书籍信息
router.get('/searchBook', (req, res) => {
    model.getSearchBook(req.query.searchMsg, msg =>
        res.send(msg)
    )
})

// 获取书籍详细信息
router.get('/getBookDetail', (req, res) => {
    model.getSearchBook(req.query.bookId, msg =>
        res.send(msg)
    )
})

// 录入读者信息
router.post('/newReader', (req, res) => {
    const data = []
    // 将对象值转化为数组
    for (let i in req.body) {
        data.push(req.body[i])
    }
    model.newReader(data)
})

// 修改读者信息
router.post('/reviseReaderMsg', (req, res) => {
    const data = req.body
    model.reviseReaderMsg(data)
})

// 全部读者信息
router.get('/readers', (req, res) => {
    model.getReaderMsg(msg =>
        res.send(msg)
    )
})

// 搜索读者信息
router.get('/searchReader', (req, res) => {
    model.getSearchReader(req.query.searchMsg, msg =>
        res.send(msg)
    )
})

// 读者书籍借阅信息
router.get('/readerBorrow', (req, res) => {
    model.getReaderBorrow(req.query.readerId, msg =>
        res.send(msg)
    )
})

// 获取读者详细信息
router.get('/getReaderDetail', (req, res) => {
    model.getSearchReader(req.query.readerId, msg =>
        res.send(msg)
    )
})

// 图书借阅
router.post('/bookBorrow', (req, res) => {
    const data = []
    // 将对象值转化为数组
    for (let i in req.body) {
        data.push(req.body[i])
    }
    model.bookBorrow(data)
})

// 图书归还
router.post('/bookReturn', (req, res) => {
    const data = req.body
    model.bookReturn(data)
})

// 全部借阅信息
router.get('/borrow', (req, res) => {
    model.getBorrowMsg(msg =>
        res.send(msg)
    )
})

// 逾期借阅信息
router.get('/expire', (req, res) => {
    model.getExpireMsg(msg =>
        res.send(msg)
    )
})

module.exports = router