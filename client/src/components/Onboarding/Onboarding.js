import React, { Component } from 'react';
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'

const Onboarding = ({filters, onClick, onSubmit}) => {
  return (
    <div id="onboarding-container">
      <h1>Welcome!</h1>
      <div>
        {
          Object.keys(Icons.unselected).map((allergy, idx) => {
            return (
              <div key={`${allergy}-${idx}`}>
                {
                  filters[allergy] ?
                    <button name={allergy} onClick={() => { onClick(allergy) }}>
                      <div className="filterLabel">{allergy}</div>
                      <img src={Icons.selected[`${allergy}Selected`]} className="filterIcon" />
                    </button>
                    : <button name={allergy} onClick={() => { onClick(allergy) }}>
                      <div className="filterLabel">{allergy}</div>
                      <img src={Icons.unselected[allergy]} className="filterIcon" />
                    </button>
                }
              </div>
            )
          })
        }
      </div>
      <button onClick={onSubmit}>Save Allergens</button>
    </div>
  )
}


export default Onboarding