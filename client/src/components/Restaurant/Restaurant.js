import React, { Component } from 'react';
import axios from 'axios';
import './Restaurant.css';

class Restaurant extends Component {
    constructor() {
        super();
            this.state = {
              restaurant: null,
        }
    };
    componentDidMount = async() => {
        const restaurant = (await axios.get(`${process.env.REACT_APP_PROXY}/api/restaurants/${this.props.selectedRestaurant.id}`)).data;
        // const reviews = (await axios.get(`${process.env.REACT_APP_PROXY}/api/reviews/${this.props.selectedRestaurant.id}`)).data;
    }
    componentDidUpdate = async() => {
        const restaurant = (await axios.get(`${process.env.REACT_APP_PROXY}/api/restaurants/${this.props.selectedRestaurant.id}`)).data;
        console.log(restaurant)
    }
    render() { 
        const { selectedRestaurant } = this.props
        return (
            <div className="restaurantCard">{selectedRestaurant.name}{selectedRestaurant.id}</div>
            
        ) 
    }
  }
   
  export default Restaurant;
