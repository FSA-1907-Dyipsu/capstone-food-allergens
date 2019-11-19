import React, { Component } from 'react';
import peanut from '../../assets/images/peanut.png';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    greeting: ''
  }
  async componentDidMount() {
    const { greeting } = (await axios.get('/api/test')).data
    console.log('greeting->', greeting)
    this.setState({ greeting })
  }
  render() { 
    const { greeting } = this.state
    return (
      <div className="App">
          <header style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <a href='/map'><div>Map</div></a>
            <a href='/search'><div>Search</div></a>
            <a href='/reviews'><div>Reviews</div></a>
            <a href='/login'><div>Login</div></a>
          </header>
          <img src={peanut} className="App-logo" alt="logo" />
          <p>
            { greeting }
          </p>
      </div>
    );
  }
}
 
export default App;

