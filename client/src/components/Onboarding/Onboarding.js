import React, { Component } from 'react';
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'

class Onboarding extends Component {
  render() {
    const { onBoarding, filters, user } = this.props.state
    return (
      <div id="onboarding-container">
        {
          Object.keys(Icons.unselected).map((allergy, idx) => {
            return (
              <div key={idx}>    {filters[allergy] === true ?
                <button name={allergy} onClick={() => { this.onClick(allergy) }}> <div className="filterLabel">{`${allergy}`}</div> <img src={Icons.selected[`${allergy}Selected`]} className="filterIcon" alt="" /> </button> :
                <button name={allergy} onClick={() => { this.onClick(allergy) }}>  <div className="filterLabel">{`${allergy}`}</div> <img src={Icons.unselected[allergy]} className="filterIcon" alt="" /> </button>}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Onboarding