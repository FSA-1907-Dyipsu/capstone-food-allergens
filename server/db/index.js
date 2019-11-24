const connection = require('./connection');
const Users = require('./models/Users');
const UserAllergens = require('./models/UserAllergens');
const Allergens = require('./models/Allergens');
const Ingredients = require('./models/Ingredients');
const DishIngredients = require('./models/DishIngredients');
const Dishes = require('./models/Dishes');
const Restaurants = require('./models/Restaurants');
const BusinessHours = require('./models/BusinessHours');
const Addresses = require('./models/Addresses');
const Reviews = require('./models/Reviews');

const models = {
    Users,
    UserAllergens,
    Allergens,
    Ingredients,
    DishIngredients,
    Dishes,
    Restaurants,
    BusinessHours,
    Addresses,
    Reviews
};

Users.associate(models)
Allergens.associate(models)
Ingredients.associate(models)
Dishes.associate(models)
Restaurants.associate(models)
BusinessHours.associate(models)
Addresses.associate(models)
Reviews.associate(models)

const sync = async (force = true) => {
    await connection.sync({ force });
};

module.exports = {
    sync,
    models
}
