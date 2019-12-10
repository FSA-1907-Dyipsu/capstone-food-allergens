import React, { Component } from 'react';
import axios from 'axios'
import searchIcon from '../../assets/images/Nav_Icons/Search_Icon Copy.png' 
import './Search.css';

class Search extends Component {
  constructor(){
    super()
    this.state = {
      searchText: ''
    }
  }
    render() { 
      console.log(this.props)
      return (
             <div id="searchBar">
                 <img src={searchIcon} id="searchIcon" alt=""/> <input type="text" id="searchfield"/>
            </div>
        )
    }
  }
   
  export default Search;