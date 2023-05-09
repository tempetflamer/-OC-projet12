import React from 'react'
//import { Wrapper, Head, Title, Text, Icon, Legend, Info } from '../styles/barChartStyle'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import ChartActivity from '../ChartActivity/ChartActivity'
import ChartSession from '../ChartSession/ChartSessions'
import ChartPerf from '../ChartPerf/ChartPerf'
import ChartScore from '../ChartScore/ChartScore'

import './Charts.scss'

export default function Charts({ user, className, userID }) {
  console.log(user.userSession)
  return (
    <section className={className}>
      <ChartActivity userID={userID} className={className + '__chart-activity'} />
      <div className="container-wrap">
        <ChartSession userID={userID} className={className + '__chart-session'} />
        <ChartPerf userID={userID} className={className + '__chart-perf'} />
        <ChartScore userID={userID} className={className + '__chart-score'} />
      </div>

      <div></div>
    </section>
  )
}
