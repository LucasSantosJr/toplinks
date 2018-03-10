var createNewLink = require('../services/createNewLink.js')

function linkController (req, res) {
  let result = createNewLink(req.body)
  res.send(result)
}

module.exports = linkController