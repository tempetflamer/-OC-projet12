import React from 'react'
import PropTypes from 'prop-types'
import './TooltipSession.scss'

/**
 * Display the tooltip when hovering over the chart, change for each column
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

TooltipSession.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
