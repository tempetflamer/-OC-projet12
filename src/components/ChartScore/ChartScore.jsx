import React from 'react'
import { useParams } from 'react-router-dom'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import useUserScore from '../../hooks/useUserInfos'
import './ChartScore.scss'

/**
 * Render a PieChart with user score
 * @param {string} className
 * @return {JSX}
 */
export default function ScoreChart({ className }) {
  const { userID } = useParams()
  const userScore = useUserScore(userID)
  const score = [{ value: userScore.data.todayScore || userScore.data.score }, { value: 1 - (userScore.data.todayScore || userScore.data.score) }]
  const colors = ['#ff0000', '#FBFBFB']

  return (
    <article className={className}>
      <h2 className={className + '__title'}>Score</h2>
      <div className="wrap-container">
        <ResponsiveContainer width={258} height={210}>
          <PieChart>
            <Pie data={score} dataKey="value" innerRadius={74} outerRadius={87} startAngle={90} endAngle={450}>
              {score.map((entry, index) => (
                //   index === 0 ? <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" /> : <Cell key={`cell-${entry}`} fill="#FBFBFB" />
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
