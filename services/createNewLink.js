var Link = require('../domains/Link')
var db =  require('../database/connection')

async function createNewLink (options) {
  let newLink
  try {
    newLink = Link(options.linkTitle, options.linkAddress, options.linkOwnerId)
    await db.linkModel.create(newLink)
    return newLink
  } catch(err){
    return {
      'error': true,
      'message': err.message
    }
  }

}

module.exports = createNewLink