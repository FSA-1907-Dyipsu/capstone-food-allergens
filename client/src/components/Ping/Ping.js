import React, { Component } from 'react';
import placeIcon from '../../assets/images/PlaceIcon.png';
import allergenPlaceIcon from '../../assets/images/allergenPlaceIcon.png';

class Ping extends Component {
    onClick = () => {
        const { onRestaurantSelection, restaurant } = this.props
        onRestaurantSelection(restaurant)
        console.log("hello")
    }
    render() { 
        let warning = false
        const { filters, restaurant } = this.props
        Object.keys(filters).map((key, index) => {
            if(filters[key] === true && restaurant.allergens.includes(key)) {
                warning = true
            }
        });
        return (
            warning ?
                <button className="placeIconAllergy">
                    <img src={allergenPlaceIcon} height="40" width="20" alt=""/>
                 </button> :
                 <button className="placeIcon" >
                    <img src={placeIcon} height="40" width="20" alt=""/>
                </button> 
            
        )
                
    }
  }
   
  export default Ping;
