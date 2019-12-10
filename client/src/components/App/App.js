import React, { Component } from 'react';
import axios from 'axios';
import Map from '../Map/Map.js'
import Nav from '../Nav/Nav.js'
import Filters from '../Filters/Filters.js'
import Restaurant from '../Restaurant/Restaurant.js'
import './App.css';

class App extends Component {
  state = {
    user: null,
    selectedRestaurant: null,
    filters: {
        dairy: false,
        eggs: false,
        gluten: false,
        peanuts: false,
        soy: false,
        shellfish: false,
        treenuts: false
    }
  }
  async componentDidMount() {
    this.getUser()
  }
  componentDidUpdate() {
    console.log(this.state)
  }
  onFilterChange = (allergy) => {
    const filters = this.state.filters
    filters[allergy] = !filters[allergy]
    this.setState({filters})
  } 
  onRestaurantSelection = (restaurant) => {
    console.log(restaurant)
    this.setState({selectedRestaurant: restaurant})
  }
  render() { 
    const { user, filters, selectedRestaurant} = this.state
    return (
      <div className="App">
          <Map filters={filters} onRestaurantSelection={this.onRestaurantSelection}/>
          <Filters filters={filters} onFilterChange={this.onFilterChange}/>
          {/* <Nav user={user}/> */}
          {selectedRestaurant !== null ? (
                <Restaurant selectedRestaurant={selectedRestaurant}/>
            ) : null}
      </div>
    );
  }
  getUser = async () => {
    const user = (await axios.get('/api/user')).data;
    if (user) this.setState({user})
  }
}
 
export default App;
