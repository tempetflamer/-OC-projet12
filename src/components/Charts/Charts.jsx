import React from 'react'
import ChartActivity from '../ChartActivity/ChartActivity.jsx'
import ChartSession from '../ChartSession/ChartSessions.jsx'
import ChartPerf from '../ChartPerf/ChartPerf.jsx'
import ChartScore from '../ChartScore/ChartScore.jsx'
import PropTypes from 'prop-types'
import './Charts.scss'

/**
 * Displays section containing all charts
 */
export default function Charts({ className }) {
  return (
    <section className={className}>
      <ChartActivity className={className + '__chart-activity'} />
      <div className="container-wrap">
        <ChartSession className={className + '__chart-session'} />
        <ChartPerf className={className + '__chart-perf'} />
        <ChartScore className={className + '__chart-score'} />
      </div>
    </section>
  )
}

Charts.propTypes = {
  className: PropTypes.string,
}
