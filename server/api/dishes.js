const router = require('express').Router()
const {Dishes} = require('../db/index').models

router.get('/:id', (req,res,next) =>{
  Dishes.findAll({where:{
    restaurantId: req.params.id
  }}).then(resto=>res.send(resto))
})

module.exports = router