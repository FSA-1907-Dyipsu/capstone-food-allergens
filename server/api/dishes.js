const router = require('express').Router()
const {Dishes} = require('../db/index').models

router.get('/:id', (req, res, next) => {
  Dishes.findByPk(req.params.id)
  .then(dishes => res.send(dishes))
  .catch(next)
});

module.exports = router