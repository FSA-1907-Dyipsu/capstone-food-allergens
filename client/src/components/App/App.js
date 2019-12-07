import React, { Component } from 'react';
import axios from 'axios';
import Map from '../Map/Map.js'
import Nav from '../Nav/Nav.js'
import Search from '../Search/Search.js'
import Filters from '../Filters/Filters.js'
import './App.css';

class App extends Component {
  state = {
    user: null,
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
  render() { 
    const { user, filters} = this.state
    return (
      <div className="App">
          <Search />
          <Map filters={filters}/>
          <Filters filters={filters} onFilterChange={this.onFilterChange}/>
          <Nav user={user}/>
      </div>
    );
  }
  getUser = async () => {
    const user = (await axios.get('/api/user')).data;
    if (user) this.setState({user})
  }
}
 
export default App;
