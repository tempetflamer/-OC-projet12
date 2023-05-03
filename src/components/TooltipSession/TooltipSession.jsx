import React from 'react'

import './TooltipSession.scss'

export default function TooltipSession({ active, payload, label }) {
  if (active && payload && payload.length && label !== 0 && label !== 8) {
    return (
      <div className="tooltip">
        <p className="tooltip__text">{payload[0].value} min</p>
      </div>
    )
  }
  return null
}
