import React, { Component } from 'react';
import axios from 'axios';

class Dishes extends Component {
    state = {
        Dishes: null
    }
    componentDidMount = async () => {
        const dishes = (await axios.get(`${process.env.REACT_APP_PROXY}/api/dishes/${this.props.selectedRestaurant.id}`)).data;
        this.setState({dishes})

    }
    render() { 
        let { dishes } = this.state
        console.log(dishes)
        return (
                    <div id="dishesContainer">
                    { dishes ? dishes.map(dish => {
                            console.log(dish.ingredients)
                            return <li key={dish.id} className="dishListItem">{dish.name}</li>  
                        }) : null}
                    </div>
        ) 
    }
  }
   
  export default Dishes;