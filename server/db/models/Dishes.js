const connection = require('../connection');
const { Sequelize } = connection;
const { UUID, UUIDV4, STRING } = Sequelize;

const Dishes = connection.define('dishes', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
        allowNull: false
    }
});

Dishes.associate = (models) => {
    Dishes.belongsTo(models.Restaurants, {
        foreignKey: 'restaurant_id'
    })
    Dishes.belongsToMany(models.Ingredients, {
        through: 'dish_ingredients',
        as: 'ingredients',
        foreignKey: 'dish_id'
    })
}

module.exports = Dishes;
