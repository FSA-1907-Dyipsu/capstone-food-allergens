import React, { Component } from 'react';
import starIcon from '../../assets/images/StarIcon.png';
import Dishes from '../Dishes/Dishes';
import Reviews from '../Reviews/Reviews';
import './Restaurant.css';
class Restaurant extends Component {
    constructor() {
        super();
        this.state = {
            activeView: 'menu'
        }
    };
    render() {
        const { selectedRestaurant, onExit, rating } = this.props;
        const { activeView } = this.state;
        return (
            <div id="restaurant-container">
                <div id="restaurant-header">
                    <div id="title-wrapper">
                        <div id="restaurant-title">
                            <span>{selectedRestaurant.name}</span>
                        </div>
                        <div className="rating-wrapper">
                            <img src={starIcon} className={`rating-star ${rating >= 1 ? 'rating-star__active' : ''}`} />
                            <img src={starIcon} className={`rating-star ${rating >= 2 ? 'rating-star__active' : ''}`} />
                            <img src={starIcon} className={`rating-star ${rating >= 3 ? 'rating-star__active' : ''}`} />
                            <img src={starIcon} className={`rating-star ${rating >= 4 ? 'rating-star__active' : ''}`} />
                            <img src={starIcon} className={`rating-star ${rating >= 5 ? 'rating-star__active' : ''}`} />
                            <button id="restaurant-btn-close" onClick={onExit}>x</button>
                        </div>
                    </div>
                    <div id="description-wrapper">
                        <span>{`${selectedRestaurant.street}, ${selectedRestaurant.city}, ${selectedRestaurant.state}, ${selectedRestaurant.zip}`}</span>
                        { selectedRestaurant.description && <span>{selectedRestaurant.description}</span> }
                    </div>
                    <div id="restaurant-nav">
                        <div onClick={() => {this.setState({activeView: 'menu'})}} className={activeView === 'menu' ? 'active' : ''}>
                            <span>Menu</span>
                        </div>
                        <div onClick={() => {this.setState({activeView: 'reviews'})}} className={activeView === 'review' ? 'active' : ''}>
                            <span>Reviews</span>
                        </div>
                        <div onClick={() => {this.setState({activeView: 'statistics'})}} className={activeView === 'statistic' ? 'active' : ''}>
                            <span>Statistics</span>
                        </div>
                    </div>
                </div>
                <div id="restaurant-content">
                    {
                        activeView === 'reviews' ? <Reviews /> :
                        activeView === 'statistics' ? <span>Statistics in progress...</span> :
                        <Dishes selectedRestaurant={selectedRestaurant}/>
                    }
                </div>
            </div>
        )
    }
}

export default Restaurant;
