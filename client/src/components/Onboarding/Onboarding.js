import React, { Component } from 'react'
import Icons from '../../assets/images/Allergy_Icons/consolidate_Icons'
import addMore from '../../assets/images/add.svg'
import './Onboarding.css'

const Onboarding = ({filters, onClick, onSubmit}) => {
  return (
    <div id="onboarding-container">
      <h1>What food allergens do you want to avoid?</h1>
      <div id="onboarding-selections">
        {
          Object.keys(Icons.unselected).map((allergy, idx) => {
            return (
              filters[allergy] ?
                <button key={`${allergy}-${idx}`} name={allergy} onClick={() => { onClick(allergy) }}>
                  <img src={Icons.selected[`${allergy}Selected`]} />
                </button>
                : <button key={`${allergy}-${idx}`} name={allergy} onClick={() => { onClick(allergy) }}>
                  <img src={Icons.unselected[allergy]} />
                </button>
            )
          })
        }
        <button onClick={() => { console.log('attempted to add allergen') }}>
          <img src={addMore} />
        </button>
      </div>
      <button id="onboarding-confirmation" onClick={onSubmit}>NEXT</button>
    </div>
  )
}


export default Onboarding