const connection = require('./connection');

const sync = async (force = true) => {
    await connection.sync({ force });
};

module.exports = {
    sync
}
