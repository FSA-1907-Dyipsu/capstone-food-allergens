const connection = require('../connection');
const { Sequelize } = connection;
const { UUID, UUIDV4, STRING, TEXT } = Sequelize;

const Restaurants = connection.define('restaurants', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
        allowNull: false
    },
    description: {
        type: TEXT
    },
    phoneNumber: {
        type: STRING,
        field: 'phone_number'
    },
    imageUrl: {
        type: STRING,
        field: 'image_url',
        validate: {
            isUrl: true
        }
    }
});

Restaurants.associate = (models) => {
    Restaurants.hasMany(models.Reviews, {
        foreignKey: 'restaurant_id'
    })
    Restaurants.hasMany(models.Dishes, {
        foreignKey: 'restaurant_id'
    })
    Restaurants.hasOne(models.Addresses, {
        foreignKey: 'restaurant_id'
    })
}

module.exports = Restaurants;
