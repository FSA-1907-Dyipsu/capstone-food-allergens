const router = require('express').Router()
const {Allergens, Users, Restaurants, Dishes, Ingredients} = require('../db/index').models

//get all allergens
router.get('/', (req, res, next) => {
  Allergens.findAll()
    .then(allergens => res.send(allergens))
    .catch(next)
});

// router.get('/:restaurantId/:dishId',  async (req,res,next) => {
//   const ingredients = await Ingredients.findAll()
//   const dish = await Dishes.findByPk(req.params.dishId)
//   const dishIngredients = dish.description.split(',')
//   console.log(ingredients)
//   res.send(dishIngredients)
// })

module.exports = router