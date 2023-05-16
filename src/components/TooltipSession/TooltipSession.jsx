import React from 'react'
import PropTypes from 'prop-types'
import './TooltipSession.scss'

/**
 * Display the tooltip when hovering over the chart, change for each column
 * @component
 * @name TooltipSession
 * @param {bool} active - Give the information if the user is in the chart to display the tooltip.
 * @param {array} payload - Give an array that contains the data of the user's session chart.
 * @returns {JSX.Element} - Return the tooltip if active true and payload not empty
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
