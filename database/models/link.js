var link = function link(connection, Sequelize) {
    return connection.define('users', {
        linkTitle: {
            type: Sequelize.STRING
        },
        linkAddress: {
            type: Sequelize.STRING
        },
        linkOwnerId: {
            type: Sequelize.INTEGER
        }
    })
}

module.exports = link