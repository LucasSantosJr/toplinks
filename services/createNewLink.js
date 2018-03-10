var Link = require('../domains/Link')

function createNewLink (options, repository) {

  try {
    let newLink = Link(options.linkTitle, options.linkAddress, options.linkOwnerId)
    return newLink
  } catch(err){
    return {
      'error': true,
      'message': err.message
    }
  }
//  repository.save(newLink)
}

module.exports = createNewLink