import React, { Component } from 'react';
import ReactMapGL, {Marker, Popup, GeolocateControl} from 'react-map-gl';
import axios from 'axios';
// import mapboxgl from 'mapbox-gl';
import './Map.css';
import placeIcon from '../../assets/images/PlaceIcon.png'

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: '100vw',
                height: '80vh',
                latitude: 40.705254,
                longitude: -74.008917,
                zoom: 12
              },
              selectedRestaurant: null,
              restaurants: [{
                id: "81cad0fa-b9a5-44f1-aa1a-6c1ef9d4da0e",
                street: "127 Pearl St",
                city: "New York",
                state: "NY",
                country: "USA",
                zip: "10005",
                geolocation: [
                40.704881,
                -74.008656
                ],
                restaurantId: "4519ffb3-f340-44f1-9519-8804d096e1e0",
                createdAt: "2019-12-07T18:34:35.678Z",
                updatedAt: "2019-12-07T18:34:35.678Z"
                }]
        }
    };
    componentDidMount(){
        this.getRestaurant()
    }
    locateUser = () => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
        console.log(navigator)
        navigator.geolocation.getCurrentPosition(async(position) => {
            console.log(position)
            this.setState({viewport:{
                width: '80vw',
                height: '80vh',
                longitude: position.coords.longitude,
                latitude: position.coords.latitude,
                zoom: 14
          }});
        });
      }
    getRestaurant = async () => {
        console.log('path-->', `${process.env.REACT_APP_PROXY}/api/restaurants/location/${this.state.viewport.latitude}/${this.state.viewport.longitude}`)
        const newRestaurants = (await axios.get(`${process.env.REACT_APP_PROXY}/api/restaurants/location/${this.state.viewport.latitude}/${this.state.viewport.longitude}`)).data;
        console.log("newRestaturants", newRestaurants)
        this.setState({restaurants: newRestaurants})
    }
    setSelectedRestaurant = async (event, restaurant) => {
        event.preventDefault();
        await this.setState({selectedRestaurant:restaurant})
    }
    closeEffect = () => {
        const listener = async(e) => {
            if(e.key === "Escape") {
                await this.setState({selectedRestaurant:null})
            }
        };
        window.addEventListener("keydown", listener);
    }
    render(){
        const {restaurants, selectedRestaurant} = this.state;
        const {setSelectedRestaurant, closeEffect, locateUser} = this
        closeEffect()
        return(
            <ReactMapGL
              {...this.state.viewport} 
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              mapStyle="mapbox://styles/grey-matter/ck3800c9m5wec1cp6j6wffxii"
              onViewportChange={(viewport) => this.setState({viewport})}
              >
            <button className="primary" onClick={locateUser}>Current Location</button>
              {restaurants.map(restaurant => (
                <React.Fragment>
                    <Marker 
                        key={restaurant.id} 
                        latitude={restaurant.geolocation[0]}  
                        longitude={restaurant.geolocation[1]}
                    >
                        <button className="placeIcon" onClick={(event) => { 
                            setSelectedRestaurant(event, restaurant)
                            }}>
                        <img src={placeIcon} height="40" width="20"/>
                    </button>
                    </Marker>
                </React.Fragment>
              ))}
              {selectedRestaurant !== null ? (
                <React.Fragment>
                  <Popup 
                    latitude={selectedRestaurant.geolocation[0]}  
                    longitude={selectedRestaurant.geolocation[1]}
                    onClose={async()=>{
                        await this.setState({selectedRestaurant:null})
                    }}
                    >
                      <div>
                          <h2>{selectedRestaurant.features.Name}</h2>
                          <p>{selectedRestaurant.features.Description}</p>
                      </div>
                  </Popup>
                  </React.Fragment>
              ) : null}
            </ReactMapGL>);
    }

}

export default Map;