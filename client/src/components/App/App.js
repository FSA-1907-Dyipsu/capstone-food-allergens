import React, { Component } from 'react';
// import peanut from '../../assets/images/peanut.png';
import axios from 'axios';
import Map from '../Map/Map.js'
import Nav from '../Nav/Nav.js'
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
          <Nav user={user}/>
          <Filters />
      </div>
    );
  }
  getUser = async () => {
    const user = (await axios.get('/api/user')).data;
    if (user) this.setState({user})
  }
}
 
export default App;
