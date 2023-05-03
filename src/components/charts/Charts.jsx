import React from 'react'
//import { Wrapper, Head, Title, Text, Icon, Legend, Info } from '../styles/barChartStyle'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import ChartActivity from '../ChartActivity/ChartActivity'
import ChartSession from '../ChartSession/ChartSessions'
import ChartPerf from '../ChartPerf/ChartPerf'
import ChartScore from '../ChartScore/ChartScore'

import './Charts.scss'

export default function Charts({ userActivity, userSession, user, className, userID }) {
  console.log(user.userSession)
  return (
    <section className={className}>
      <ChartActivity userActivity={userActivity} className={className + '__chart-activity'} />
      <div className="container-wrap">
        <ChartSession userID={userID} className={className + '__chart-session'} firstRender={false} />
        <ChartPerf userPerf={user.userPerf} className={className + '__chart-perf'} />
        <ChartScore userScore={user.userInfo} className={className + '__chart-score'} />
      </div>

      <div></div>
    </section>
  )
}
