import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { useFormaterUserPerf } from '../../hooks/useUserPerf.js'

import './ChartPerf.scss'

export default function ChartEfficiency({ userPerf, className }) {
  //const res = useFormaterUserPerf(18)
  //console.log(res)
  //
  // userPerf = userPerf.data.map(function (data) {
  //   switch (data.kind) {
  //     case 1:
  //       console.log('entrée 1', data.kind)
  //       // console.log('entré 1')
  //       return { ...data, kind: 'Cardio' }
  //     case 2:
  //       return { ...data, kind: 'Énergie' }
  //     case 3:
  //       return { ...data, kind: 'Endurance' }
  //     case 4:
  //       return { ...data, kind: 'Force' }
  //     case 5:
  //       return { ...data, kind: 'Vitesse' }
  //     case 6:
  //       return { ...data, kind: 'Intensité' }
  //     default:
  //       return { ...data }
  //   }
  // })
  console.log(userPerf)
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
