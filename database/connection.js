const Sequelize = require('sequelize')

const database = process.env.DATABASE
const username = process.env.USERNAME
const password = process.env.PASSWORD

if (database || username || password ) {
  throw new Error('You should set the environment variables of database connection')
}

const dbConnection = new Sequelize(config.database, config.username, config.password, {
  'dialect': config.dialect
})

const linkModel = require('./models/link')(dbConnection, Sequelize)

linkModel.sync().then(() => {
  console.log('Working');
})

module.exports.dbConnection = dbConnection
module.exports.linkModel = linkModel
