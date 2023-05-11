import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import useUserPerf from '../../hooks/useUserPerf'
import { formatPerf } from '../../utils/formatData'
import PropTypes from 'prop-types'
import './ChartPerf.scss'

/**
 * Render a RadarChart with user performance data
 * @param {string} className
 * @return {JSX}
 */
export default function ChartPerf({ className }) {
  const { userID } = useParams()
  const { data, isLoading, error } = useUserPerf(userID)
  const [formatedData, setFormatedData] = useState()

  useEffect(() => {
    if (!isLoading && !error && data.data) {
      const res = formatPerf(data)
      const reverse = res.reverse()
      setFormatedData(reverse)
    }
  }, [isLoading, error, data])

  if (!formatedData) {
    return ''
  }
  return (
    <article className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formatedData} width="100%" height="100%">
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
          <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  )
}

ChartPerf.propTypes = {
  className: PropTypes.string,
}
