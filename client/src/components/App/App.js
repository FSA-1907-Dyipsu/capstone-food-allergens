import React, { Component } from 'react';
import axios from 'axios';
import Map from '../Map/Map.js'
import Nav from '../Nav/Nav.js'
import Search from '../Search/Search.js'
import Filters from '../Filters/Filters.js'
import './App.css';

class App extends Component {
  state = {
    user: null
  }
  async componentDidMount() {
    this.getUser()
  }
  render() { 
    const { user } = this.state
    return (
      <div className="App">
          <Search />
          <Map />
          <Filters />
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
