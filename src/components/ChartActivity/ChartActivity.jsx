import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import './ChartActivity.scss'
import TooltipActivity from '../TooltipActivity/TooltipActivity'

export default function ChartActivity({ userActivity, className }) {
  return (
    <article className="charts__chart-activity">
      <div className="charts__chart-activity__head">
        <h2 className="charts__chart-activity__head__title">Activité quotidienne</h2>
        <legend className="charts__chart-activity__head__legend">
          <div className="charts__chart-activity__head__legend__data">
            <div className="charts__chart-activity__head__legend__data__color--kg" />
            <p className="charts__chart-activity__head__legend__data__cal">Poids (kg)</p>
          </div>
          <div className="charts__chart-activity__head__legend__data">
            <div className="charts__chart-activity__head__legend__data__color--cal" />
            <p className="charts__chart-activity__head__legend__data__cal">Calories brûlées (kCal)</p>
          </div>
        </legend>
      </div>
      {/* height="145px" width="702px" */}
      <ResponsiveContainer height="85%" width="100%">
        <BarChart data={userActivity.sessions} barGap={8} /* barCategoryGap={1} */>
          <CartesianGrid vertical={false} strokeDasharray="4 4" />
          <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14 }} dy={15} stroke="1 1" />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            //domain={['dataMin - 2', 'dataMax + 1']}
            tickCount="3"
            axisLine={false}
            orientation="right"
            tickLine={false} //retrait des trait de chaque tick
            tick={{ fontSize: 14 }} // taille legend axe x
            dx={15} // espacement des legend axe x
          />
          <YAxis yAxisId="calories" dataKey="calories" type="number" /* domain={['dataMin - 20', 'dataMax + 10']} */ hide={true} />
          <Tooltip content={<TooltipActivity />} wrapperStyle={{ outline: 'none' }} />
          <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
          <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </article>
  )
}
