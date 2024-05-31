import React from 'react'
import { generateCardData } from '../Utils/Material'

function Cards() {
  // Generate card data
  const cardData = generateCardData()

  return (
    <>
      <h2>Cards</h2>
      <div className='card-container'>
        {/* Iterate over the card data and render cards dynamically */}
        {cardData.map((card, index) => (
          <div key={index} className='card'>
            <img
              src={card.imageUrl}
              width='60'
              height='140'
              className='card-img-top'
              alt='Card'
            />
            <div className='card-body'>
              <h5 className='card-title'>{card.title}</h5>
              <p className='card-text'>{card.text}</p>
              <p className='card-subtitle'>{card.subtitle}</p>
              <button className='btn btn-primary'>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cards
