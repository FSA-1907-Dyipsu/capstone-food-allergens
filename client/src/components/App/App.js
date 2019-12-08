import React, { Component } from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import Map from '../Map/Map.js'
import Nav from '../Nav/Nav.js'
import Search from '../Search/Search.js'
import Filters from '../Filters/Filters.js'
import Welcome from '../Welcome/Welcome.js'
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'
import './App.css';

class App extends Component {
  state = {
    user: null,
    onBoarded:true,
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
    this.setState({filters})
  }
  onAllergyChange = (allergy) =>{
    const allergies = this.state.temp;
    if(allergies.includes(allergy)){
      console.log(allergy)
    }
  }
  render() { 
    const { user, filters} = this.state
    if(!user){
      return(
        <div>
          <Welcome/>
        </div>
      )
    }
    else if(user && !this.state.onBoarded){
      return(
        <div>
          <h1>Welcome!</h1>
          <div>
          {
            Object.keys(Icons.unselected).map((allergy, idx) =>{
              return(
              <div key={idx} onClick={this.onAllergyChange} name={allergy}>
                {allergy}
                <img src={Icons.selected[`${allergy}Selected`]}/>
              </div>
              )
            })
          }
          </div>
          <button>Save Allergens</button>
        </div>
      )
    }
    return (
      <div className="App">
        <div>
        <Search />
        <Map filters={filters}/>
        <Filters filters={filters} onFilterChange={this.onFilterChange}/>
        <Nav user={user}/>
        </div>
      </div>
    );
  }
  getUser = async () => {
    const user = (await axios.get('/api/user')).data;
    if (user) this.setState({user})
  }
}
 
export default App;