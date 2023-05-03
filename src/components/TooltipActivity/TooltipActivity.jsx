import React from 'react'

import './TooltipActivity.scss'

export default function TooltipSActivity({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p className="tooltip__text">{payload[0].value} kg</p>
        <p className="tooltip__text">{payload[1].value} kCal</p>
      </div>
    )
  }
  return null
}
