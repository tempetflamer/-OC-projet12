import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

import './ChartScore.scss'

export default function ScoreChart({ userScore, className }) {
  const score = [{ value: userScore.todayScore || userScore.score }, { value: 1 - (userScore.todayScore || userScore.score) }]
  const colors = ['#ff0000', '#FBFBFB']

  return (
    <article className={className}>
      <h2 className={className + '__title'}>Score</h2>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie data={score} dataKey="value" innerRadius={74} outerRadius={87} startAngle={90} endAngle={450}>
            {/* Par defaut start à 0 et termine à 360 */}
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
    </article>
  )
}
