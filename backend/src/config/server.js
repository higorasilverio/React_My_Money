const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(queryParser({
    parser: parseInt
}))
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND application is running at port ${port}.`)
})

module.exports = server