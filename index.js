var express = require('express')
var app = express()
var createLink = require('./routes/createLinkRoute')
var getAllLinks = require('./routes/getAllLinksRoute')

var db = require('./database/connection')

app.use(express.json())

app.use('/', createLink)
app.use('/', getAllLinks)

app.use(function (req, res, next) {
  res.statusCode = 404
  res.send('404 not found')
})

app.listen(8080, () => {
  console.log('Running on the port 8080')
})
