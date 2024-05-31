import React from 'react'
import { generateBadgeData } from '../Utils/Material'

function Badges() {
  const badgeData = generateBadgeData()

  return (
    <div>
      <h2>Badges</h2>
      {badgeData.map((badge, index) => (
        <span key={index} className={`badge bg-${badge.type} m-2`}>
          {badge.label}
        </span>
      ))}
    </div>
  )
}

export default Badges
