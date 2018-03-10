var Sequelize = require('sequelize')
var config = require('../configs/devconfig')

const connection = new Sequelize(config.database, config.username, config.password, {
  'dialect': config.dialect
})


connection.authenticate()
  .then( function () {
    console.log('Conectado')
  })
  .catch( function () {
    console.log('Não conectado')
  })


const User = connection.define('user', {
  name: {
      type: Sequelize.STRING
  }
})

User.sync()
