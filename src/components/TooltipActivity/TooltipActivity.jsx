import React from 'react'
import './TooltipActivity.scss'

/**
 * Display the tooltip when hovering over the chart, change for each column
 * @param {boolean} active
 * @param {array} payload
 * @returns
 */
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
