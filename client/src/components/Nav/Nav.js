import React, { Component } from 'react';
import {HashRouter, Link} from 'react-router-dom'
import accountIcon from '../../assets/images/Nav_Icons/Account_Icon.png'
import homeIcon from '../../assets/images/Nav_Icons/Home_Icon.png'
import searchIcon from '../../assets/images/Nav_Icons/Search_Icon.png'
import mapIconSelected from '../../assets/images/Nav_Icons/Map_Icon Copy.png'
import './Nav.css';

class Nav extends Component {
  state = {}
  render() { 
    const { user } = this.props
    return (
      <header id="nav-container">
        <Link to='/map'><img src={mapIconSelected} height="30" width="30" alt=""/><span>Map</span></Link>
        {/* <a href='/search'><img src={searchIcon} height="30" width="30"alt=""/><span>Search</span></a> */}
        <Link to='/reviews'><img src={homeIcon} height="30" width="30"alt=""/><span>Reviews</span></Link>
        {
          user ? <a href={`${process.env.REACT_APP_PROXY}/api/auth/logout`}><img src={accountIcon} height="30" width="30" alt=""/><span>Logout</span></a>
          : <a href={`${process.env.REACT_APP_PROXY}/api/auth/google`}><img src={accountIcon} height="30" width="30" alt=""/><span>Login</span></a>
        }
      </header>
    );
  }
}
 
export default Nav;
