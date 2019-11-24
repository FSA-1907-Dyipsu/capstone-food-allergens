import React, { Component } from 'react';
import ReactMapGL, {Marker, Popup, GeolocateControl} from 'react-map-gl';
// import mapboxgl from 'mapbox-gl';
import './Map.css';
import placeIcon from '../../assets/images/PlaceIcon.png'

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: '100vw',
                height: '100vh',
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 12
              },
              selectedRestaurant: null,
              restaurants: [{
                              type: "Restuarant",
                              features: {
                                  Id: 960,
                                  Name: "Nob Hill Cafe",
                                  Reviews: 5,
                                  Address: "1152 Taylor St, San Francisco, CA 94108",
                                  Hours: null,
                                  Description: "This relaxed cafe serves Tuscan pastas & pizzas in a quaint space that recalls old San Francisco",
                                  FoodType: ["Comfort Food", "Pizza"],
                                  Allergies: ["Peanuts", "Lentils"]
                              },
                              geometry: {
                                  Coordinates: [37.792980, -122.435790]
                              }
                          }
              ]
        }
        this.setSelectedRestaurant = this.setSelectedRestaurant.bind(this);
        this.closeEffect = this.closeEffect.bind(this);
        this.locateUser = this.locateUser.bind(this);
    };
    componentDidMount(){
        
    }
    locateUser() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
        console.log(navigator)
        navigator.geolocation.getCurrentPosition(async(position) => {
            console.log(position)
            this.setState({viewport:{
                width: '100vw',
                height: '100vh',
                longitude: position.coords.longitude,
                latitude: position.coords.latitude,
                zoom: 14
          }});
        });
      }
    // getRestaurant(){
    //     getRestaurant()
    //     //will need an api call to get all the restaurants within the viewport 
    //     //can then take this data and render on the map with the Marker component
    //     //alternatively, we could preload the data for faster load times 
    // }
    async setSelectedRestaurant(event, restaurant){
        event.preventDefault();
        await this.setState({selectedRestaurant:restaurant})
    }
    closeEffect(){
        const listener = async(e) => {
            console.log(e)
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
            <button class="primary" onClick={locateUser}>Current Location</button>
              {restaurants.map(restaurant=>(
                <React.Fragment>
                    <Marker 
                        key={restaurant.features.Id} 
                        latitude={restaurant.geometry.Coordinates[0]}  
                        longitude={restaurant.geometry.Coordinates[1]}
                    >
                        <button class="placeIcon" onClick={(event) => { 
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
                    latitude={selectedRestaurant.geometry.Coordinates[0]} 
                    longitude={selectedRestaurant.geometry.Coordinates[1]}
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