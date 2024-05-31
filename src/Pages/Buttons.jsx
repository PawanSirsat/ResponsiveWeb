import React from 'react'
import { generateButtonData } from '../Utils/Material'

function Buttons() {
  // Generate button data
  const buttonData = generateButtonData()

  return (
    <div>
      <span>
        <h2>Buttons</h2>
      </span>
      {/* Iterate over the button data and render buttons dynamically */}
      {buttonData.map((button, index) => (
        <button key={index} className={`btn btn-${button.type} m-2`}>
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default Buttons
