import React, { Component } from 'react';
import axios from 'axios';
import './Restaurant.css';

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
        return (
            
                <div className="restaurantCard">
                    {selectedRestaurant.name}{selectedRestaurant.id}
                </div>
            
            
        ) 
    }
  }
   
  export default Restaurant;
