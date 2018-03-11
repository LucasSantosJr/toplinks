var express = require('express')
var app = express()
var linkRoute = require('./routes/linkRoute')
var db = require('./database/connection')

app.use(express.json())

app.use('/', linkRoute)

app.use( function (req, res, next) {
  res.statusCode = 404
  res.send('404 not found')
})

app.listen(8080)

console.log('Running on the port 8080')