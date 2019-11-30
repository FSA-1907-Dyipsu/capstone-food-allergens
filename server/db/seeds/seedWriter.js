const fs = require('fs');
const path = require('path');
const axios = require('axios');

const DATA_FOLDER = path.resolve('./db/seeds/data');
const CURRENT_LOCATION = [40.705263, -74.009107] // [lat, long]

const getRestaurant = (geolocation) => {
    return axios({
        method: 'GET',
        url: 'https://us-restaurant-menus.p.rapidapi.com/restaurants/search',
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': 'us-restaurant-menus.p.rapidapi.com',
            'x-rapidapi-key': '269486f914msh63fff76b7b1235dp1f17c6jsndece146f962f'
        },
        params: {
            distance: '1',
            lat: geolocation[0],
            lon: geolocation[1],
            page: '1'
        }
    })
}

const getDishes = (restaurantId) => {
    return axios({
        method: 'GET',
        url: `https://us-restaurant-menus.p.rapidapi.com/restaurant/${restaurantId}/menuitems`,
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': 'us-restaurant-menus.p.rapidapi.com',
            'x-rapidapi-key': '269486f914msh63fff76b7b1235dp1f17c6jsndece146f962f'
        },
        params: {
            page: '1'
        }
    })
}

const writeSeedFileData = (fileName, jsonData) => {
    fs.writeFile(path.join(DATA_FOLDER, fileName), jsonData, err => {
        if (err) console.error('Error writing seed file:', fileName, err)
        else console.log('Successfully created seed file:', fileName, jsonData)
    })
}

const buildRestaurantsSeedFile = async () => {
    const restaurantsRaw = (await getRestaurant(CURRENT_LOCATION)).data.result.data
    const restaurants = []
    for (let resto of restaurantsRaw) {
        restaurants.push(
            {
                name: resto.restaurant_name,
                description: resto.cuisines.join(','),
                phoneNumber: resto.restaurant_phone,
                imageUrl: '',
                businessHours: resto.hours,
                address: {
                    street: resto.address.street,
                    city: resto.address.city,
                    state: resto.address.state,
                    country: 'USA',
                    zip: resto.address.postal_code,
                    geolocation: [resto.geo.lat, resto.geo.lon]
                },
                dishes: (await getDishes(resto.restaurant_id)).data.result.data.map(dish => {
                    return {
                        name: dish.menu_item_name,
                        description: dish.menu_item_description,
                        price: dish.menu_item_pricing[0] ? dish.menu_item_pricing[0].price : 0.0
                    }
                })
            }
        )
    }
    writeSeedFileData('Restaurants.json', JSON.stringify(restaurants))
}

// buildRestaurantsSeedFile();
