var createNewLink = require('../services/createNewLink.js')

async function linkController (req, res) {
  let result = await createNewLink(req.body)
  res.send(result)
}

module.exports = linkController