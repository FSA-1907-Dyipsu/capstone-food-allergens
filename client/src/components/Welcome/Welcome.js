import React, {Component} from 'react'
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'
import {HashRouter, Route, Link} from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
  return (
    <div>
      <h1>
        Avoid allergic reactions with the power of the data
      </h1>
      <h3>
        Join a community helping each other to make more informed decisions about their food. Know the risk before you eat.

        Saving lives with each meal.
      </h3>
      <br/>
      <button>
        <a href={`${process.env.REACT_APP_PROXY}/api/auth/google`}>Button</a>
        <a>Login</a>
      </button>
    </div>
  )
  }
    // console.log(this.props)
    // if(window.location.pathname === '/onboard'){
    //   return(
    //     <div>
    //       <h1>Welcome!</h1>
    //       <div>
    //       {
    //         Object.keys(Icons.unselected).map((allergy, idx) =>{
    //           return(
    //           <div key={idx}>
    //             {allergy}
    //             <img src={Icons.selected[`${allergy}Selected`]}/>
    //           </div>
    //           )
    //         })
    //       }
    //       </div>
    //     </div>
    //   )
    // }


export default Welcome