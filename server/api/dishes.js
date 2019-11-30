const router = require('express').Router()
const {Dishes} = require('../db/index').models

router.get('/:id', (req, res, next) => {
  Dishes.findAll({where:{
    restaurant_id:req.params.id
  }})
  .then(dishes => res.send(dishes))
  .catch(next)
});

module.exports = router