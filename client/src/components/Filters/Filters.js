import React, { Component } from 'react';
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'
import './Filters.css';

class Filters extends Component {
    state = {
        toggle: false,
    }
    onClick = (allergy) => {
        this.props.onFilterChange(allergy)
    }
    filterToggle = () => {

    }
    render() {
        const { filters } = this.props
        return (
            <div className="filterContainer">
                {Object.keys(Icons.unselected).map((allergy, idx) => {
                    return (
                        <div key={idx}>
                            {filters[allergy] === true ?
                                <button name={allergy} onClick={() => { this.onClick(allergy) }}>
                                    <div className="filterLabel">{`${allergy}`}</div>
                                    <img src={Icons.selected[`${allergy}Selected`]} className="filterIcon" alt="" />
                                </button> :
                                <button name={allergy} onClick={() => { this.onClick(allergy) }}>
                                    <div className="filterLabel">{`${allergy}`}</div>
                                    <img src={Icons.unselected[allergy]} className="filterIcon" alt="" />
                                </button>}
                        </div>
                    )
                })} </div>
        );
    }
}

export default Filters;