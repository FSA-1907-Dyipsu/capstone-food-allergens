const connection = require('../connection');
const { Sequelize } = connection;
const { UUID, UUIDV4, STRING, INTEGER, TEXT } = Sequelize;

const Reviews = connection.define('reviews', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    rating: {
        type: INTEGER,
        allowNull: false,
        validate: { min: 1, max: 5 }
    },
    title: {
        type: STRING,
    },
    description: {
        type: TEXT,
    },
    userId: {
        type: UUID,
        allowNull: false,
        field: 'user_id'
    },
    restaurantId: {
        type: UUID,
        allowNull: false,
        field: 'restaurant_id'
    }
});

Reviews.associate = (models) => {
    Reviews.belongsTo(models.Users, {
        foreignKey: 'user_id'
    })
    Reviews.belongsTo(models.Restaurants, {
        foreignKey: 'restaurant_id'
    })
}

module.exports = Reviews;
