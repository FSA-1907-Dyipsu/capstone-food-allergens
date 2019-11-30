const router = require('express').Router()
const {Allergens, Users, } = require('../db/index').models

router.get('/', (req, res, next) => {
  Allergens.findAll() //where... user
    .then(allergens => res.send(allergens))
    .catch(next)
});

module.exports = router