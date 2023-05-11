import React from 'react'
import PropTypes from 'prop-types'
import './TooltipActivity.scss'

/**
 * Display the tooltip when hovering over the chart, change for each column
 * @param {boolean} active
 * @param {array} payload
 * @returns
 */
export default function TooltipActivity({ active, payload }) {
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

TooltipActivity.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
