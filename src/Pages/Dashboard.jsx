import React from 'react'
import {
  generateAlertButtons,
  generateBadgeData,
  generateButtonData,
  generateCardData,
} from '../Utils/Material'

function Dashboard() {
  // Generate data for alerts, badges, buttons, and cards
  const alertButtons = generateAlertButtons()
  const badges = generateBadgeData()
  const buttons = generateButtonData()
  const cards = generateCardData()

  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>

      {/* Display alerts */}
      <div className='alerts'>
        <h3>Alerts</h3>
        {alertButtons.map((button, index) => (
          <button key={index} className={`btn btn-${button.type} m-1`}>
            {button.label}
          </button>
        ))}
      </div>

      {/* Display badges */}
      <div className='badges'>
        <h3>Badges</h3>
        {badges.map((badge, index) => (
          <span key={index} className={`badge bg-${badge.type} m-1`}>
            {badge.label}
          </span>
        ))}
      </div>

      {/* Display buttons */}
      <div className='buttons'>
        <h3>Buttons</h3>
        {buttons.map((button, index) => (
          <button key={index} className={`btn btn-${button.type} m-1`}>
            {button.label}
          </button>
        ))}
      </div>

      {/* Display cards */}
      <div className='cards'>
        <h3>Cards</h3>
        <div className='card-container'>
          {cards.map((card, index) => (
            <div key={index} className='card'>
              <img src={card.imageUrl} className='card-img-top' alt='Card' />
              <div className='card-body'>
                <h5 className='card-title'>{card.title}</h5>
                <p className='card-text'>{card.text}</p>
                <p className='card-subtitle'>{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
