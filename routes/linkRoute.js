var express = require('express')
var linkController = require('../controllers/linkController')
var linkRoute = express.Router()

linkRoute.post('/link', linkController)

module.exports = linkRoute