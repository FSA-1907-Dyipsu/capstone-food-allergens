import React, {Component} from 'react'
import './Welcome.css'

class Welcome extends Component {
  constructor(){
    super();
  }
  render(){
    return(
    <div>
      <h1>
        Avoid allergic reactions with the power of the data
      </h1>
      <h3>
        Join a community helping each other to make more informed decisions about their food. Know the risk before you eat.

        Saving lives with each meal.
      </h3>
      <br/>
        <a href={`${process.env.REACT_APP_PROXY}/api/auth/google`}>Sign in With Google</a>
    </div>)
  }
  }


export default Welcome