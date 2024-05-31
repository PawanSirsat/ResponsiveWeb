import React, { useState } from 'react'
import { generateAlertButtons } from '../Utils/Material'

function Alerts() {
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState('')
  const [alertMessage, setAlertMessage] = useState('')

  const showAlertHandler = (type, message) => {
    setShowAlert(true)
    setAlertType(type)
    setAlertMessage(message)
  }

  const hideAlertHandler = () => {
    setShowAlert(false)
  }

  return (
    <div>
      <h2>Alerts</h2>
      {/* Iterate over the button data returned from generateAlertButtons */}
      {generateAlertButtons().map((button, index) => (
        <button
          key={index}
          className={`btn btn-${button.type} m-2`}
          onClick={() => showAlertHandler(button.type, button.message)}
        >
          {button.label}
        </button>
      ))}

      {showAlert && (
        <div className={`alert alert-${alertType}`} role='alert'>
          <button type='button' className='close' onClick={hideAlertHandler}>
            <span aria-hidden='true'>&times;</span>
          </button>
          {alertMessage}
        </div>
      )}
    </div>
  )
}

export default Alerts
