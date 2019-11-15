import React from 'react';
import logo from './logo.svg';
import peanut from './peanut.png'
import './App.css';

function App() {
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
          Create React App Rocks!
          #NoMoreNuts
          <br/>
          cue landing page!
        </p>
    </div>
  );
}

export default App;
