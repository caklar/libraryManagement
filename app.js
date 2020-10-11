const express = require('express')
const router = require('./router')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(router)

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/css/', express.static('./src/css/'))
app.use('/js/', express.static('./src/js/'))
app.use('', express.static('./dist/'))

app.listen(3000, function (){
    console.log('running......')
})