import React, { Component } from 'react';
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'
import starIcon from '../../assets/images/StarIcon.png';
import Dishes from '../Dishes/Dishes.js'
import './Restaurant.css';
// import prof_overalls from '../../assets/images/prof_overalls.jpg';
// import prof_cheeta from '../../assets/images/prof_cheeta.jpg';

class Restaurant extends Component {
    constructor() {
        super();
            this.state = {
              preview: false,
              show: true
        }
    };
    render() { 
        const { selectedRestaurant } = this.props;
        return (
                <div className="restaurantCard">
                    <div className="cardHeader">
                        <div id="titleContainer">
                        <h1>{selectedRestaurant.name}</h1>
                        {/* <img src={prof_cheeta} alt=""/> */}
                        { selectedRestaurant.allergens.map(allergy => {
                            return <img src={Icons.selected[`${allergy}Selected`]} className="allergyIcon" id={allergy} alt=""/>  
                        })}
                         <div className="Rating">
                            <img src={starIcon} className="Rating--Star Rating--Star__active"/>
                            <img src={starIcon} className="Rating--Star Rating--Star__active"/>
                            <img src={starIcon} className="Rating--Star Rating--Star__active"/>
                            <img src={starIcon} className="Rating--Star"/>
                            <img src={starIcon} className="Rating--Star"/>
                        </div>
                        <div id="address">{selectedRestaurant.street}</div>
                        </div>  
                    </div>
                    <div id="cardBody">
                        <Dishes selectedRestaurant={selectedRestaurant}/>
                    </div>
                </div>
        ) 
    }
  }
   
  export default Restaurant;
