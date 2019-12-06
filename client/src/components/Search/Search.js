import React, { Component } from 'react';
import searchIcon from '../../assets/images/Nav_Icons/Search_Icon Copy.png' 
import './Search.css';

class Search extends Component {
    state = {
    }
    render() { 
      return (
             <div id="searchBar">
                 <img src={searchIcon} id="searchIcon"/> <input type="text" id="searchfield"/>
            </div>
        )
    }
  }
   
  export default Search;