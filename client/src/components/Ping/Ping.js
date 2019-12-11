import React, { Component } from 'react';
import placeIcon from '../../assets/images/PlaceIcon.png';
import allergenPlaceIcon from '../../assets/images/allergenPlaceIcon.png';

class Ping extends Component {
    render() { 
        let warning = false
        const { filters, restaurant } = this.props
        if(restaurant.allergens){
            Object.keys(filters).map((key, index) => {
                if(filters[key] === true && restaurant.allergens.includes(key)) {
                    warning = true
                }
            });
            return (
                warning ?
                <div>
                    <div className="placeIconAllergy">
                        <img src={allergenPlaceIcon} height="40" width="20" alt=""/>
                     </div>
                </div>
                     :
                <div>
                     <div className="placeIcon" >
                        <img src={placeIcon} height="40" width="20" alt=""/>
                    </div> 
                </div>
            )
        } 
        else{
            return(
                <div>
                    <h6>
                        Loading....
                    </h6>
                </div>
            )
        }  
    }
  }
   
  export default Ping;
