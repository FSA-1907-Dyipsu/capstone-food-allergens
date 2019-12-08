import React, { Component } from 'react';
import axios from 'axios';
import './Restaurant.css';
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'
import starIcon from '../../assets/images/StarIcon.png';
import prof_overalls from '../../assets/images/prof_overalls.jpg';
import prof_cheeta from '../../assets/images/prof_cheeta.jpg';

class Restaurant extends Component {
    constructor() {
        super();
            this.state = {
              restaurant: null,
              preview: false,
              show: true
        }
    };
    componentDidMount = async() => {
        const restaurant = (await axios.get(`${process.env.REACT_APP_PROXY}/api/restaurants/${this.props.selectedRestaurant.id}`)).data;
    }
    componentDidUpdate = async() => {
        const restaurant = (await axios.get(`${process.env.REACT_APP_PROXY}/api/restaurants/${this.props.selectedRestaurant.id}`)).data;
        console.log(restaurant)
    }
    // getAllergens = (selectedRestaurant) => {
    //     selectedRestaurant.allergens.map(allergy => {
    //         return <img src={Icons.selected[`${allergy}Selected`]} className="filterIcon" alt=""/>  
    //     });
    // }
    // onClick = () => {
    //     this.props.onRestaurantSelection(null)
    // }
    render() { 
        const { selectedRestaurant } = this.props
        return (
                <div className="restaurantCard">
                    <div className="cardHeader">
                        {selectedRestaurant.name}
                        {/* <img src={prof_cheeta} alt=""/> */}
                        <div className="Rating">
                            <img src={starIcon} className="Rating--Star Rating--Star__active"/>
                            <img src={starIcon} className="Rating--Star Rating--Star__active"/>
                            <img src={starIcon} className="Rating--Star Rating--Star__active"/>
                            <img src={starIcon} className="Rating--Star"/>
                            <img src={starIcon} className="Rating--Star"/>
                        { selectedRestaurant.allergens.map(allergy => {
                            return <img src={Icons.selected[`${allergy}Selected`]} className="allergyIcon" id={allergy} alt=""/>  
                        })}
                        {selectedRestaurant.street}
                        </div>  
                    </div>
                </div>
            
            
        ) 
    }
  }
   
  export default Restaurant;
