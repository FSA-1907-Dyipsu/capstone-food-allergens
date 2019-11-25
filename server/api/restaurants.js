const router = require('express').Router()
const {Restaurants} = require('../db/index').models

router.get('/', (req, res, next) => {
  Restaurants.findAll()
    .then(restaurants => res.send(restaurants))
    .catch(next)
});

module.exports = router