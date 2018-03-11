var getAllLinks = require('../services/getAllLinks')

async function allLinksController(req, res) {
  let users = await getAllLinks()
  res.send(users)
}

module.exports = allLinksController