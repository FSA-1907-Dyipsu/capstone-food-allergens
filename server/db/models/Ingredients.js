const connection = require('../connection');
const { Sequelize } = connection;
const { UUID, UUIDV4, STRING } = Sequelize;

const Ingredients = connection.define('ingredients', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
        allowNull: false
    },
    allergenId: {
        type: UUID,
        field: 'allergen_id'
    }
});

Ingredients.associate = (models) => {
    Ingredients.belongsTo(models.Allergens, {
        foreignKey: 'allergen_id'
    })
    Ingredients.belongsToMany(models.Dishes, {
        through: 'dish_ingredients',
        as: 'dishes',
        foreignKey: 'ingredient_id'
    })
}

module.exports = Ingredients;
