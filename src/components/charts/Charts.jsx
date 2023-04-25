import React from 'react'
//import { Wrapper, Head, Title, Text, Icon, Legend, Info } from '../styles/barChartStyle'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import ChartActivity from '../ChartActivity/ChartActivity'
import ChatSession from '../ChartSession/ChartSessions'

import './Charts.scss'
import ChartSession from '../ChartSession/ChartSessions'

export default function Charts({ userActivity, userSession, user, className }) {
  console.log(user.userSession)
  return (
    <section className={className}>
      <ChartActivity userActivity={userActivity} className={className + '__chart-activity'} />
      <div className="container-wrap">
        <ChartSession userSession={user.userSession} className={className + '__chart-session'} />
      </div>

      <div></div>
    </section>
  )
}
