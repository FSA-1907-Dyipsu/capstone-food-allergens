import React, {Component} from 'react'
import './Welcome.css'
import googleIcon from '../../assets/images/google.png'

class Welcome extends Component {
  constructor(){
    super();
  }
  render(){
    return(
    <div id="welcome-container">
      <h1>
        Avoid allergic reactions with the power of the data
      </h1>
      <p>
        Join a community helping each other to make more informed decisions about their food. Know the risk before you eat. Saving lives with each meal.
      </p>
      <div id="sign-in-google">
        <img src={googleIcon} />
        <a href={`${process.env.REACT_APP_PROXY}/auth/google`}>Sign in With Google</a>
      </div>
    </div>)
  }
  }


export default Welcome