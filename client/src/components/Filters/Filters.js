import React, { Component, Fragment } from 'react';
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'
import './Filters.css';

class Filters extends Component {
    state = {
        toggle: false,
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
    onClick = (allergy) => {
        const filters = this.state.filters
        filters[allergy] = !filters[allergy]
        this.setState({filters})
    }
    filterToggle = () => {

    }
    render() { 
      return (
        <div className="filterContainer">
        {Object.keys(Icons.unselected).map((allergy,idx)=>{
            return(
                <div className="individualFilterContainer" key={idx}>
                    {this.state.filters[allergy] === true ? 
                    <button name={allergy} onClick={() => {this.onClick(allergy)}}> <div className="filterLabel">{`${allergy}`}</div> <img src={Icons.selected[`${allergy}Selected`]} className="filterIcon"/> </button> : 
                    <button name={allergy} onClick={() => {this.onClick(allergy)}}>  <div className="filterLabel">{`${allergy}`}</div> <img src={Icons.unselected[allergy]} className="filterIcon"/> </button>}
                </div> 
            )
        })} </div>
      );
    }
  }
   
  export default Filters;