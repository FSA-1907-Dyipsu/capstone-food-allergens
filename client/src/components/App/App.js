import React, { Component } from 'react';
import axios from 'axios';
import Map from '../Map/Map.js'
import Nav from '../Nav/Nav.js'
import Filters from '../Filters/Filters.js'
import Restaurant from '../Restaurant/Restaurant.js'
import Welcome from '../Welcome/Welcome.js'
import Onboarding from '../Onboarding/Onboarding.js';
import ReviewForm from '../ReviewForm/ReviewForm.js'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    user: null,
    isOnboarded: false,
    selectedRestaurant: null,
    filters: {
      dairy: false,
      egg: false,
      gluten: false,
      peanut: false,
      soy: false,
      shellfish: false,
      treenut: false,
      fish: false
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
  handleChangeAllergenFilter = () => {
    // needs to actually update user allergens
    const isOnboarded = this.state.isOnboarded
    this.setState({ isOnboarded: !isOnboarded })
  }
  render() {
    const { user, filters, selectedRestaurant, isOnboarded } = this.state
    // if(window.location.pathname.split('/')[1]){
    //   return(
    //     <div>
          
    //     </div>
    //   )
    // }else{
    return (
      <div id="app-container">
        <HashRouter>
        {
          !user ? <Welcome /> :
            !isOnboarded ? <Onboarding filters={filters} onAllergenClick={this.onFilterChange} onSubmit={this.handleChangeAllergenFilter} />
              : <>
                <Switch>
                  <Route path='/map' render={(props) => {
                      return (
                        <>
                        <Map filters={filters} onRestaurantSelection={this.onRestaurantSelection} />
                        <Filters filters={filters} onFilterChange={this.onFilterChange} />
                        </>
                      )
                    } 
                  } />
                  <Route path='/reviews' component={ReviewForm}/>
                  <Redirect to='/map'/>
                </Switch>
              <Nav user={user} />
              {selectedRestaurant && <Restaurant selectedRestaurant={selectedRestaurant} />}
            </>
          }
          </HashRouter>
      </div>
    )
}
  getUser = async () => {
    const user = (await axios.get('/api/user')).data;
    if (user) this.setState({ user })
  }
}

export default App;
