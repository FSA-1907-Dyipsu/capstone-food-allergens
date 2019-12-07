import React, { Component } from 'react';
import accountIcon from '../../assets/images/Nav_Icons/Account_Icon.png'
import homeIcon from '../../assets/images/Nav_Icons/Home_Icon.png'
// import mapIcon from '../../assets/images/Nav_Icons/Map_Icon.png'
import searchIcon from '../../assets/images/Nav_Icons/Search_Icon.png'
// import accountIconSelected from '../../assets/images/Nav_Icons/Account_Icon Copy.png'
// import homeIconSelected from '../../assets/images/Nav_Icons/Home_Icon Copy.png'
import mapIconSelected from '../../assets/images/Nav_Icons/Map_Icon Copy.png'
// import searchIconSelected from '../../assets/images/Nav_Icons/Search_Icon Copy.png'
import './Nav.css';

class Nav extends Component {
  state = {}
  render() { 
    const { user } = this.props
    return (
      <div className="Nav">
          <header style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <a href='/map'><div><img src={mapIconSelected} height="30" width="30"/>Map</div></a>
            <a href='/search'><div><img src={searchIcon} height="30" width="30"/>Search</div></a>
            <a href='/reviews'><div><img src={homeIcon} height="30" width="30"/>Reviews</div></a>
            {
              user ? <a href={`${process.env.REACT_APP_PROXY}/api/auth/logout`}><div><img src={accountIcon} height="30" width="30"/>Logout</div></a>
              : <a href={`${process.env.REACT_APP_PROXY}/api/auth/google`}><div><img src={accountIcon} height="30" width="30"/>Login</div></a>
            }
          </header>
      </div>
    );
  }
}
 
export default Nav;
