const router = require('express').Router()
const {Restaurants} = require('../db/index').models

//get everything
router.get('/', (req, res, next) => {
  Restaurants.findAll() //where geolocation
    .then(restaurants => res.send(restaurants))
    .catch(next)
});

//get by an ID
router.get('/:id', (req, res, next) => {
  Restaurants.findByPk(req.params.id)
  .then(restaurant => res.send(restaurant))
  .catch(next)
})

module.exports = router