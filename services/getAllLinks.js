var Link = require('../domains/Link')
var db = require('../database/connection')

async function getAllLinks() {
    let links
    try {
        links = await db.linkModel.findAll()
        return links
    } catch (err) {
        return {
            'error': true,
            'message': err.message
        }
    }
}

module.exports = getAllLinks