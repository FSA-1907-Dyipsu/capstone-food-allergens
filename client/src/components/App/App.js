import React, { Component } from 'react';
// import peanut from '../../assets/images/peanut.png';
// import axios from 'axios';
import Map from '../Map/Map.js'
import Nav from '../Nav/Nav.js'
import './App.css';

class App extends Component {
  state = {
    greeting: ''
  }
  async componentDidMount() {
    // const { greeting } = (await axios.get('/api/test')).data
    // console.log('greeting->', greeting)
    // this.setState({ greeting })
  }
  render() { 
    const { greeting } = this.state
    return (
      <div className="App">
          <Nav />
          <Map />
      </div>
    );
  }
}
 
export default App;

