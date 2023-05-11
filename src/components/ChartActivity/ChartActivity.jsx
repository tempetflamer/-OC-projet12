import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import TooltipActivity from '../TooltipActivity/TooltipActivity'
import useUserActivity from '../../hooks/useUserActivity'
import { formatActivity } from '../../utils/formatData'
import PropTypes from 'prop-types'
import './ChartActivity.scss'

/**
 * Render a BarChart with user activity Data
 */
export default function ChartActivity({ className }) {
  const { userID } = useParams()
  const { data, isLoading, error } = useUserActivity(userID)
  const [formatedData, setFormatedData] = useState()

  useEffect(() => {
    if (!isLoading && !error && data.sessions) {
      const res = formatActivity(data)
      setFormatedData(res)
    }
  }, [isLoading, error, data])

  if (!formatedData) {
    return ''
  }
  return (
    <article className={className}>
      <div className={className + '__head'}>
        <h2 className={className + '__head__title'}>Activité quotidienne</h2>
        <legend className={className + '__head__legend'}>
          <div className={className + '__head__legend__data'}>
            <div className={className + '__head__legend__data__color--kg'} />
            <p className={className + '__head__legend__data__kg'}>Poids (kg)</p>
          </div>
          <div className={className + '__head__legend__data'}>
            <div className={className + '__head__legend__data__color--cal'} />
            <p className={className + '__head__legend__data__cal'}>Calories brûlées (kCal)</p>
          </div>
        </legend>
      </div>
      <ResponsiveContainer height="85%" width="100%">
        <BarChart data={formatedData} barGap={8}>
          <CartesianGrid vertical={false} strokeDasharray="4 4" />
          <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14, fontWeight: 500, fill: '#9B9EAC' }} dy={15} stroke="1 1" />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            tickCount="3"
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
            domain={['dataMin - 2', 'dataMax + 1']}
          />
          <YAxis yAxisId="calories" dataKey="calories" type="number" hide={true} />
          <Tooltip content={<TooltipActivity />} wrapperStyle={{ outline: 'none' }} />
          <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
          <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </article>
  )
}

ChartActivity.propTypes = {
  className: PropTypes.string,
}
