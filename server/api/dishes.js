const router = require('express').Router()
const {Dishes, DishIngredients} = require('../db/index').models

router.get('/:id', (req,res,next) =>{
  Dishes.findAll({where:{
    restaurantId: req.params.id
  }}).then(resto=>res.send(resto))
})

router.get('/:dishId',  async (req,res,next) => {
  const ingredientsRaw = (await DishIngredients.findAll({
    where:{
      dishId: req.params.dishId}
    }))

  const ingredients = (await Promise.all(ingredientsRaw.map(el =>  Ingredients.findByPk(el.ingredientId)
  ))).map(i => i.name)
  console.log('hey')
  res.send('ingredients')
})

module.exports = router