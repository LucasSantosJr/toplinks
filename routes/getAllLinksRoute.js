var express = require('express')
var getAllLinks = require('../controllers/allLinksController')
var getAll = express.Router()

getAll.get('/link', getAllLinks)

module.exports = getAll