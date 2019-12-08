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
    onBoarded:false,
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
  onClick = (allergy) => {
    this.onFilterChange(allergy)
  }
  onSubmit = () => {
    const onBoarded = this.state.onBoarded
    this.setState({onBoarded : !onBoarded})
  }
  render() { 
    const { user, filters, onBoarded} = this.state
    console.log(user)
    return (
      <div className="App">
        <HashRouter>
          {
            user  && this.state.onBoarded ?
            <div>
            <Search />
            <Map filters={filters}/>
            <Filters filters={filters} onFilterChange={this.onFilterChange}/>
            <Nav user={user}/>
            </div> :
            !user && !onBoarded ? 
            <div>
              <Route component={Welcome}/>
            </div>
             :
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
          }
        </HashRouter>
      </div>
    );
  }
  getUser = async () => {
    const user = (await axios.get('/api/user')).data;
    if (user) this.setState({user})
  }
}
 
export default App;