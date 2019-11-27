const router = require('express').Router()
const {Restaurants} = require('../db/index').models

router.get('/', (req, res, next) => {
  Restaurants.findAll() //where geolocation
    .then(restaurants => res.send(restaurants))
    .catch(next)
});

router.get('/', (req,res,next) => {
  Restaurants.findOne() //where Id or name or something
  .then(restaurant=>res.send(restaurant))
  .catch(next)
})

module.exports = router