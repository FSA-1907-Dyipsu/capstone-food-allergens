import React, { Component } from 'react';
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'
import axios from 'axios';
import './Dishes.css';

class Dishes extends Component {
    state = {
        dishes: null
    }
    componentDidMount = async () => {
        const dishes = (await axios.get(`${process.env.REACT_APP_PROXY}/api/dishes/${this.props.selectedRestaurant.id}`)).data;
        this.setState({ dishes })
    }
    getAllergens = (ingredientList) => {
        return ingredientList.map((ingredient, idx) => {
            if (ingredient.allergen) {
                return <img key={idx} src={Icons.selected[`${ingredient.allergen.name}Selected`]} className="allergyMenuIcon" alt="" />
            }
        })
    }
    render() {
        let { dishes } = this.state
        return (
            <div id="dishes-container">
                {dishes ? dishes.map(dish => {
                    return (
                        <div className="dishes-details">
                            <div key={dish.id}>
                                <span>{dish.name}</span>
                                <div className="allergen-icons">
                                    {this.getAllergens(dish.ingredients)}
                                </div>
                            </div>
                            <span>{dish.description}</span>
                        </div>
                    )
                }) : null}
            </div>
        )
    }
}

export default Dishes;