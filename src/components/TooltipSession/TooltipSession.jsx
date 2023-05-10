import React from 'react'
import './TooltipSession.scss'

/**
 * Display the tooltip when hovering over the chart, change for each column
 * @param {boolean} active
 * @param {array} payload
 * @returns
 */
export default function TooltipSession({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p className="tooltip__text">{payload[0].value} min</p>
      </div>
    )
  }
  return null
}
