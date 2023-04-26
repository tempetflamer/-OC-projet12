import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

import './ChartPerf.scss'

export default function ChartEfficiency({ userPerf, className }) {
  return (
    <article className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userPerf.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
          <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  )
}
