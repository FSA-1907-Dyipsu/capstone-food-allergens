import React, { Component, Fragment } from 'react';
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'
import './Filters.css';

class Filters extends Component {
    state = {
        filters: {
            dairy: false,
            eggs: false,
            gluten: false,
            peanuts: false,
            soy: false,
            shellfish: false,
            treenuts: false
        }
    }
    async componentDidMount() {
        // ILL NEED AN API  CALL HERE FOR THE ALLERGIES IN THE DATABASE
    }
    onClick = (allergy) => {
        
        // this.state.filters[allergy] = !this.state[allergy]
    }
    render() { 
      return (
        Object.keys(Icons.unselected).map((allergy)=>{
            return(
                <div className="filterContainer">
                    {this.state.filters[allergy] === true ? 
                    <button onClick={this.onClick(allergy)}> <img src={Icons.selected[allergy]} className="filterIconTrue"/> <div className="filterLabelTrue">{`${allergy}`}</div> </button> : 
                    <button onClick={this.onClick(allergy)}> <img src={Icons.unselected[allergy]} className="filterIconFalse"/> <div className="filterLabelFalse">{`${allergy}`}</div> </button>}
                </div>
            )
        })
      );
    }
  }
   
  export default Filters;