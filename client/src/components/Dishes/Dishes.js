import React, { Component } from 'react';
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'
import axios from 'axios';
import './Dishes.css';

class Dishes extends Component {
    state = {
        Dishes: null
    }
    componentDidMount = async () => {
        const dishes = (await axios.get(`${process.env.REACT_APP_PROXY}/api/dishes/${this.props.selectedRestaurant.id}`)).data;
        this.setState({dishes})
    }
    getAllergens = (ingredientList) => {
        return ingredientList.map((ingredient, idx) => {
            if(ingredient.allergen !== null) {
                return <img key={idx} src={Icons.selected[`${ingredient.allergen.name}Selected`]} className="allergyMenuIcon" alt=""/>  
            } 
        })
    }
    render() { 
        let { dishes } = this.state
        return (
                <div id="dishesContainer">
                { dishes ? dishes.map(dish => {
                    return <li key={dish.id} className="dishListItem">{dish.name} <div className="allergenIcons">{this.getAllergens(dish.ingredients)}</div></li>  
                    }) : null}
                </div>
    ) 
    }
  }
   
  export default Dishes;