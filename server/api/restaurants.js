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
router.get('/location/:lat/:long', (req, res, next) => {
  const userLat = req.params.lat
  const userLong = req.params.long
  // if front end can send current geolocation back as params, we can find nearby restos but for now I just hardcoded my geolocation
  Addresses.findAll()
  .then(restos =>{
    // so the number after the less than sign is the measure of distance in miles. currently it is at 10 mi cuz i'm far from NY
    return restos.filter(resto => Haversine(userLat,userLong,resto.geolocation[0],resto.geolocation[1]) < 10)
  })
    //not sure if this sends back only the first instance 
    .then(resp => resp.map(respo =>{
      Restaurants.findByPk(respo.restaurantId)
      .then(rep => res.send(rep))
    })
    )
  .catch(next)
})

module.exports = router