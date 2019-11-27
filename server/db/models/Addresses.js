const connection = require('../connection');
const { Sequelize } = connection;
const { UUID, UUIDV4, STRING, ARRAY } = Sequelize;

const Addresses = connection.define('addresses', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    street: {
        type: STRING,
        allowNull: false
    },
    city: {
        type: STRING,
        allowNull: false
    },
    state: {
        type: STRING,
        allowNull: false
    },
    country: {
        type: STRING,
        allowNull: false
    },
    zip: {
        type: STRING,
        allowNull: false
    },
    geolocation: {
        type: ARRAY(STRING) // [latitude, longitude]
    },
    restaurantId: {
        type: UUID,
        allowNull: false,
        field: 'restaurant_id'
    }
});

Addresses.associate = (models) => {
    Addresses.belongsTo(models.Restaurants, {
        foreignKey: 'restaurant_id'
    })
}

module.exports = Addresses;
