const query = require('./mysql')

// 录入新的图书信息
exports.newBook = function (data) {
    const sql = `INSERT INTO books(book_id,book_name,author,classify,publish,count) VALUES(?,?,?,?,?,?)`

    query(sql, data, function (err, res) {
        if (err) {
            console.log(err.message)
        }
    })
}

// 获取全部图书信息
exports.getBooks = function (callback) {
    const sql = `SELECT * FROM books`

    query(sql, function (err, res) {
        if (err) {
            console.log(err.message)
        } else {
            callback(res)
        }
    })
}

// 根据查询内容获取图书信息
exports.getSearchBook = function (data, callback) {
    const sql = `SELECT * FROM books WHERE book_id=` + data + ` OR book_name=` + data + ` OR author=` + data + ` OR classify=` + data + ` OR publish=` + data

    query(sql, data, function (err, res) {
        if (err) {
            console.log(err.message)
        } else {
            callback(res)
        }
    })
}

// 查询图书详细信息
exports.getBookDetail = function (id, callback) {
    const sql = `SELECT * FROM books WHERE book_id=` + id

    query(sql, id, function (err, res) {
        if (err) {
            console.log(err.message)
        } else {
            callback(res)
        }
    })
}

// 修改图书信息
exports.reviseBookMsg = function (data) {
    const sql = `UPDATE books SET book_name=` + data.bookName + `,author=` + data.author + `,classify=` + data.classify + `,publish=` + data.publish + ',count=' + data.count + ` WHERE book_id=` + data.bookId
    
    query(sql, data, function (err, res) {
        if (err) {
            console.log(err.message)
        }
    })
}

// 录入新的读者信息
exports.newReader = function (data) {
    const sql = `INSERT INTO readers(reader_id,reader_name,sex,num,phone) VALUES(?,?,?,?,?)`

    query(sql, data, function (err, res) {
        if (err) {
            console.log(err.message)
        }
    })
}

// 获取全部读者信息
exports.getReaderMsg = function (callback) {
    const sql = `SELECT * FROM readers`

    query(sql, function (err, res) {
        if (err) {
            console.log(err.message)
        } else {
            callback(res)
        }
    })
}

// 根据查询信息获取读者信息
exports.getSearchReader = function (data, callback) {
    const sql = `SELECT * FROM readers WHERE reader_id=` + data + ` OR reader_name=` + data + ` OR num=` + data + ` OR phone=` + data

    query(sql, data, function (err, res) {
        if (err) {
            console.log(err.message)
        } else {
            callback(res)
        }
    })
}

// 查询读者的借阅记录
exports.getReaderBorrow = function (id, callback) {
    const sql = `SELECT * FROM books,readers,borrow WHERE borrow.reader_id=` + id + ` AND borrow.reader_id = readers.reader_id AND borrow.book_id = books.book_id`

    query(sql, id, function (err, res) {
        if (err) {
            console.log(err.message)
        } else {
            callback(res)
        }
    })
}

// 修改读者信息
exports.reviseReaderMsg = function (data) {
    const sql = `UPDATE readers SET reader_name=` + data.readerName + `,sex=` + data.sex + `,num=` + data.num + `,phone=` + data.phone + ` WHERE reader_id=` + data.readerId
    
    query(sql, data, function (err, res) {
        if (err) {
            console.log(err.message)
        }
    })
}

// 图书借阅操作
exports.bookBorrow = function (data) {
    const sql = `INSERT INTO borrow(book_id,reader_id,status) VALUE(?,?,1)`

    query(sql, data, function (err, res) {
        if (err) {
            console.log(err.message)
        }
    })
}

// 图书归还操作
exports.bookReturn = function (data) {
    const sql = `UPDATE borrow SET status=0 WHERE book_id=` + data.bookId + ` AND reader_id=` + data.readerId
    
    query(sql, data, function (err, res) {
        if (err) {
            console.log(err.message)
        }
    })
}

// 查询全部借阅记录
exports.getBorrowMsg = function (callback) {
    const sql = `SELECT * FROM books,readers,borrow WHERE borrow.book_id = books.book_id AND borrow.reader_id = readers.reader_id`

    query(sql, function (err, res) {
        if (err) {
            console.log(err.message)
        } else {
            callback(res)
        }
    })
}

// 查询逾期记录
exports.getExpireMsg = function (callback) {
    const sql = `SELECT * FROM books,readers,borrow WHERE borrow.book_id = books.book_id AND borrow.reader_id = readers.reader_id AND status=2`

    query(sql, function (err, res) {
        if (err) {
            console.log(err.message)
        } else {
            callback(res)
        }
    })
}