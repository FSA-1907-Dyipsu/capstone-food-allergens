import React, { Component } from 'react';
import axios from 'axios';
import Map from '../Map/Map.js'
import Nav from '../Nav/Nav.js'
import Filters from '../Filters/Filters.js'
import Restaurant from '../Restaurant/Restaurant.js'
import Welcome from '../Welcome/Welcome.js'
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'
import './App.css';

class App extends Component {
  state = {
    user: null,
    onBoarded:false,
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
  onClick = (allergy) => {
    this.onFilterChange(allergy)
  }
  onSubmit = () => {
    const onBoarded = this.state.onBoarded
    this.setState({onBoarded : !onBoarded})
  }
  render() { 
    const { user, filters, selectedRestaurant, onBoarded} = this.state
    if(!user){
      return(
        <Welcome/>
      )
    }
    else if(user && !onBoarded){
      return(
        <div>
          <h1>Welcome!</h1>
          <div>
          {
            Object.keys(Icons.unselected).map((allergy, idx) =>{
                return(
                  <div key={idx}>    {filters[allergy] === true ? 
                    <button name={allergy} onClick={() => {this.onClick(allergy)}}> <div className="filterLabel">{`${allergy}`}</div> <img src={Icons.selected[`${allergy}Selected`]} className="filterIcon" alt=""/> </button> : 
                    <button name={allergy} onClick={() => {this.onClick(allergy)}}>  <div className="filterLabel">{`${allergy}`}</div> <img src={Icons.unselected[allergy]} className="filterIcon" alt=""/> </button>}
                  </div>
                )
            })
          }
          </div>
          <button onClick={this.onSubmit}>Save Allergens</button>
        </div>
      )
    }
    else if(user && onBoarded){
      return (
        <div className="App">
            <Map filters={filters} onRestaurantSelection={this.onRestaurantSelection}/>
            <Filters filters={filters} onFilterChange={this.onFilterChange}/>
            <Nav user={user}/>
            {selectedRestaurant !== null ? (
                  <Restaurant selectedRestaurant={selectedRestaurant}/>
              ) : null}
        </div>
      );
    }

  }
  getUser = async () => {
    const user = (await axios.get('/api/user')).data;
    if (user) this.setState({user})
  }
}
 
export default App;
