import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import useUserScore from '../../hooks/useUserInfos'
import PropTypes from 'prop-types'
import './ChartScore.scss'

/**
 * Render a PieChart with user score
 */
export default function ChartScore({ className }) {
  const colors = ['#ff0000', '#FBFBFB']
  const { userID } = useParams()
  const { data, isLoading, error } = useUserScore(userID)
  const [score, setScore] = useState()

  useEffect(() => {
    if (!isLoading && !error && data.id) {
      const formatScore = [{ value: data.todayScore || data.score }, { value: 1 - (data.todayScore || data.score) }]
      setScore(formatScore)
    }
  }, [isLoading, error, data])

  if (!score) {
    return ''
  }
  return (
    <article className={className}>
      <h2 className={className + '__title'}>Score</h2>
      <div className="wrap-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={score} dataKey="value" innerRadius={74} outerRadius={87} startAngle={90} endAngle={450}>
              {score.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} cornerRadius={10} style={{ outline: 'none' }} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <p className={className + '__text'}>
          <span className={className + '__text__score'}>
            {score[0].value * 100}%<br />
          </span>
          de votre
          <br /> objectif
        </p>
      </div>
    </article>
  )
}

ChartScore.propTypes = {
  className: PropTypes.string,
}
