const router = require('express').Router()
const {Restaurants, Addresses} = require('../db/index').models
const Sequelize = require('sequelize');
const { Op } = Sequelize

//function to calculate distance from current location to restos
function deg2rad(degrees){
  let radians = degrees * (Math.PI/180);
  return radians;
  }

  function Haversine(lat1,lon1,lat2,lon2) {
    let deltaLat = lat2 - lat1 ;
    let deltaLon = lon2 - lon1 ;
    earthRadius =  3959 ;
    alpha    = deltaLat/2;
    beta     = deltaLon/2;
    a        = Math.sin(deg2rad(alpha)) * Math.sin(deg2rad(alpha)) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(deg2rad(beta)) * Math.sin(deg2rad(beta)) ;
    c        = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    distance =  earthRadius * c;
    return distance.toFixed(2);
  }

//get everything
router.get('/', (req, res, next) => {
  Restaurants.findAll()
    .then(restaurants => res.send(restaurants))
    .catch(next)
});

//get by an ID
router.get('/:id', (req, res, next) => {
  Restaurants.findByPk(req.params.id)
  .then(restaurant => res.send(restaurant))
  .catch(next)
})

//by Geolocation
  //this sends back an array of addresses that are geolocated close to a starting point in case you were looking to populate the map with icons for nearby restos. I wasn't sure how to filter it to the resto names, but i'm sure I can figure it out just a bit longer
router.get('/location/:lat/:long', async(req, res, next) => {
  // if front end can send current geolocation back as params, we can find nearby restos 
  const userLat = req.params.lat
  const userLong = req.params.long
  let restos = await Addresses.findAll()
  restos = restos.filter(resto => Haversine(userLat, userLong, resto.geolocation[0], resto.geolocation[1]) < 1)
  let uniq = Array.from(new Set(restos.map(el => el.street))).map(street =>{
    return restos.find(resto => resto.street === street)
  })
  res.send(uniq.slice(0,20))
})



module.exports = router