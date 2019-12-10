import React, { Component } from 'react';
import axios from 'axios';
import Map from '../Map/Map.js'
import Nav from '../Nav/Nav.js'
import Filters from '../Filters/Filters.js'
import Restaurant from '../Restaurant/Restaurant.js'
import Welcome from '../Welcome/Welcome.js'
import Onboarding from '../Onboarding/Onboarding.js';
import './App.css';

class App extends Component {
  state = {
    user: null,
    isOnboarded: false,
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
  onFilterChange = (allergy) => {
    const filters = this.state.filters
    filters[allergy] = !filters[allergy]
    this.setState({ filters })
  }
  onRestaurantSelection = (restaurant) => {
    this.setState({ selectedRestaurant: restaurant })
  }
  handleClickAllergen = (allergy) => {
    this.onFilterChange(allergy)
  }
  handleChangeAllergenFilter = () => {
    // needs to actually update user allergens
    const isOnboarded = this.state.isOnboarded
    this.setState({ isOnboarded: !isOnboarded })
  }
  render() {
    const { user, filters, selectedRestaurant, isOnboarded } = this.state
    return (
      <div id="app-container">
        {
          !user ? <Welcome /> :
            !isOnboarded ? <Onboarding filters={filters} onClick={this.handleClickAllergen} onSubmit={this.handleChangeAllergenFilter} />
              : (
                <>
                  <Map filters={filters} onRestaurantSelection={this.onRestaurantSelection} />
                  <Filters filters={filters} onFilterChange={this.onFilterChange} />
                  <Nav user={user} />
                  {selectedRestaurant && (
                    <Restaurant selectedRestaurant={selectedRestaurant} />
                  )}
                </>
              )
        }
      </div>
    )
  }
  getUser = async () => {
    const user = (await axios.get('/api/user')).data;
    if (user) this.setState({ user })
  }
}

export default App;
