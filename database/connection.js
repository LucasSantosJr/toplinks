var Sequelize = require('sequelize')
var config = require('../configs/devconfig')

const dbConnection = new Sequelize(config.database, config.username, config.password, {
  'dialect': config.dialect
})

var linkModel = require('./models/link')(dbConnection, Sequelize)

linkModel.sync().then(() => {
  console.log('Working');
})

//link.findAll().then(function (links) {
//  console.log(links[1].dataValues)
//})

module.exports.dbConnection = dbConnection
module.exports.linkModel = linkModel