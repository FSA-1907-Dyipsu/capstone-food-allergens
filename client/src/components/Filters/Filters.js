import React, { Component } from 'react';
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'
import './Filters.css';

class Filters extends Component {
    state = {
    }
    async componentDidMount() {
        // ILL NEED AN API  CALL HERE FOR THE ALLERGIES IN THE DATABASE
    }
    render() { 
      return (
        Object.keys(Icons).map((allergy)=>{
            return(
            <button>
                <img src={Icons[allergy]} class="filterIcon"/>
                <div>{`${allergy}`}</div>
            </button>
            )
        })
      );
    }
  }
   
  export default Filters;