const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(req.user);
});

// router.post('/create', (req,res,next) =>{
//   Users.create(req.body)
//     .then(user=> res.send(user))
//     .then(() => res.status(201))
//     .catch(next)
// })

// router.put('/update', (req,res,next) =>{ 
//   Users.findByPk(req.params.id)
//     .then(user => user.update(req.body))
//     .then(user => res.send(user))
//     .catch(next)
// })

module.exports = router;
