const router = require('express').Router()
const {Dishes} = require('../db/index').models

router.get('/', (req, res, next) => {
  Dishes.findAll()
    .then(dishes => res.send(dishes))
    .catch(next)
});

module.exports = router