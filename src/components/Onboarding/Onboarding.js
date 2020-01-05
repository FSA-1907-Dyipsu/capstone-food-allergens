import React, { Component } from 'react'
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'
import addMore from '../../assets/images/add.svg'
import './Onboarding.css'

const Onboarding = ({filters, onAllergenClick, onSubmit}) => {
  return (
    <div id="onboarding-container">
      <h1>What food allergens do you want to avoid?</h1>
      <div id="onboarding-selections">
        {
          Object.keys(filters).map((allergy) => {
            return (
              <button id={`btn-${allergy}`} key={allergy} onClick={() => { onAllergenClick(allergy) }}>
                {
                  filters[allergy] ? <img src={Icons.selected[`${allergy}Selected`]} /> : <img src={Icons.unselected[allergy]} />
                }
              </button> 
            )
          })
        }
        <div id="btn-add-allergen">
          <img src={addMore} />
        </div>
      </div>
      <button id="onboarding-confirmation" onClick={onSubmit}>NEXT</button>
    </div>
  )
}


export default Onboarding