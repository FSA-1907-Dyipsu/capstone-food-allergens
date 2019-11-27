const fs = require('fs');
const path = require('path');
const models = require('../models');
const { Users, Allergens, Restaurants, Addresses, Dishes } = models;

const DATA_FOLDER = path.resolve('./db/seeds/data');
const SEED_FILES = [
  { model: Users, file: 'Users.json' },
  { model: Allergens, file: 'Allergens.json' },
  { model: Restaurants, file: 'Restaurants.json' }
];

const getSeedFileData = file => {
  const jsonData = fs.readFileSync(path.join(DATA_FOLDER, file));
  return JSON.parse(jsonData);
};

const createModelData = (list, Model) => {
  return Promise.all(list.map(el => Model.create(el)));
};

const createRestaurantData = async (restaurants) => {
  for (let restaurant of restaurants) {
    const resto = await Restaurants.create({
      name: restaurant.name,
      description: restaurant.description,
      phoneNumber: restaurant.phoneNumber,
      imageUrl: restaurant.imageUrl
    })
    const {address, dishes} = restaurant
    await Addresses.create({...address, restaurantId: resto.id})
    await Promise.all(dishes.map(dish => Dishes.create({...dish, restaurantId: resto.id})))
  }
 }

const seeder = () => {
  SEED_FILES.forEach(async ({ model, file }) => {
    const seedData = getSeedFileData(file);
    switch (file) {
      case 'Restaurants.json': {
        const restaurants = await createRestaurantData(seedData);
        // console.log(`\nLoaded restaurants ${file}: \n${JSON.stringify(restaurants)}\n`);
        break;
      }
      default:
        await createModelData(seedData, model);
        // console.log(`\nLoaded data from ${file}: \n${JSON.stringify(seedData)}...\n`);
    }
  });
};

module.exports = seeder;
