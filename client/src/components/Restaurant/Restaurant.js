import React, { Component } from 'react';
import axios from 'axios';
import './Restaurant.css';
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
    // onClick = () => {
    //     this.props.onRestaurantSelection(null)
    // }
    render() { 
        const { selectedRestaurant } = this.props
        console.log(selectedRestaurant)
        return (
                <div className="restaurantCard">
                    <div className="cardHeader">
                        {selectedRestaurant.name}
                        {/* <img src={prof_cheeta} alt=""/> */}
                        <div class="Rating">
                            <img src={starIcon} class="Rating--Star Rating--Star__active"/>
                            <img src={starIcon} class="Rating--Star Rating--Star__active"/>
                            <img src={starIcon} class="Rating--Star Rating--Star__active"/>
                            <img src={starIcon} class="Rating--Star"/>
                            <img src={starIcon} class="Rating--Star"/>
                        {selectedRestaurant.street}
                        </div>  
                    </div>
                </div>
            
            
        ) 
    }
  }
   
  export default Restaurant;
