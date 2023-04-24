import React from 'react'
//import { Wrapper, Head, Title, Text, Icon, Legend, Info } from '../styles/barChartStyle'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import './Charts.scss'

export default function Charts({ userActivity }) {
  return (
    <article className="charts">
      <div className="charts__head">
        <h2 className="charts__head__title">Activité quotidienne</h2>
        <legend className="charts__head__legend">
          <div className="charts__head__legend__data">
            <div className="charts__head__legend__data__color" color="#282D30" />
            <p className="charts__head__legend__data__cal">Poids (kg)</p>
          </div>
          <div className="charts__head__legend__data">
            <div className="charts__head__legend__data__color" color="#E60000" />
            <p className="charts__head__legend__data__cal">Calories brûlées (kCal)</p>
          </div>
        </legend>
      </div>
      {/* height="145px" width="702px" */}
      <ResponsiveContainer height="100%" width="100%">
        <BarChart data={userActivity.sessions} barGap={8} /* barCategoryGap={1} */>
          <CartesianGrid vertical={false} strokeDasharray="4 4" />
          <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14 }} dy={15} stroke="1 1" />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            //domain={['dataMin - 2', 'dataMax + 1']}
            tickCount="4"
            axisLine={false}
            orientation="right"
            tickLine={false} //retrait des trait de chaque tick
            tick={{ fontSize: 14 }} // taille legend axe x
            dx={15} // espacement des legend axe x
          />
          <YAxis yAxisId="calories" dataKey="calories" type="number" /* domain={['dataMin - 20', 'dataMax + 10']} */ hide={true} />
          <Tooltip content="" />
          <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
          <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </article>
  )
}
