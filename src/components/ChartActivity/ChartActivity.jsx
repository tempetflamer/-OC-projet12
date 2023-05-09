import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import './ChartActivity.scss'
import TooltipActivity from '../TooltipActivity/TooltipActivity'
import useUserActivity from '../../hooks/useUserActivity'
import useFormatter from '../../hooks/useFormatter'

export default function ChartActivity({ className }) {
  const { userID } = useParams()
  let userActivity = useUserActivity(userID)
  console.log('userActivity', userActivity)
  const formatData = async () => {
    userActivity = userActivity.data.sessions.map(function (data) {
      let splitDays = data.day.split('-').pop()
      if (splitDays.charAt(0) === '0') {
        splitDays = splitDays.substring(1)
      }
      return { ...data, day: splitDays }
    })
  }
  formatData()
  console.log('res test async userActivity', userActivity)

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   setData([])
  //   try {
  //     const userActivity = useUserActivity(18)
  //     console.log('use Formatter userActivity chartActivity 0', userActivity)

  //     const resF = userActivity.data.sessions.map(function (data) {
  //       let splitDays = data.day.split('-').pop()
  //       if (splitDays.charAt(0) === '0') {
  //         splitDays = splitDays.substring(1)
  //       }
  //       return { ...data, day: splitDays }
  //     })
  //     console.log('userActivity chartActivity 2', resF)
  //     setData(resF)
  //   } catch (e) {
  //     setData([])
  //   }
  // }, [])

  // console.log('data zzzz', data)
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   setData([])

  //   // let res = api.get(`/user/${id}/average-sessions`)
  //   // console.log('res session', res)
  //   // console.log('res.data session ', res.data)

  //   try {
  //     const userActivity = useUserActivity(18)
  //     console.log('use Formatter userActivity chartActivity 0', userActivity)

  //     // const res = useUserActivity(18)
  //     // console.log('userActivity chartActivity 1', res)

  //     const resF = userActivity.data.sessions.map(function (data) {
  //       let splitDays = data.day.split('-').pop()
  //       if (splitDays.charAt(0) === '0') {
  //         splitDays = splitDays.substring(1)
  //       }
  //       return { ...data, day: splitDays }
  //     })
  //     console.log('userActivity chartActivity 2', resF)
  //     setData(resF)
  //   } catch (e) {
  //     setData([])
  //   }
  // }, [])

  //*dataMock
  const userActivityMock = useUserActivity(18)
  console.log('userActivity chartActivity', userActivityMock, userActivityMock.data, userActivityMock.data.sessions)

  // const userActivity = async () => {
  //   const res = await useUserActivity(18)//.promise()
  //   return res
  // }
  // console.log('use Formatter userActivity chartActivity 0', userActivity)

  // const res = useUserActivity(18)
  // console.log('userActivity chartActivity 1', res)

  // const resF = userActivity.data.sessions.map(function (data) {
  //   let splitDays = data.day.split('-').pop()
  //   if (splitDays.charAt(0) === '0') {
  //     splitDays = splitDays.substring(1)
  //   }
  //   return { ...data, day: splitDays }
  // })
  // console.log('userActivity chartActivity 2', resF)

  // var rest = ''
  // const userActivity2 = async () => {
  //   const res = useUserActivity(18) //.promise()

  //   const resF = res.data.sessions.map(function (data) {
  //     let splitDays = data.day.split('-').pop()
  //     if (splitDays.charAt(0) === '0') {
  //       splitDays = splitDays.substring(1)
  //     }
  //     return { ...data, day: splitDays }
  //   })
  //   rest = resF
  //   return resF
  // }
  // console.log('use Formatter userActivity chartActivity 0', userActivity2, rest)
  // console.log('rest', rest)
  /* error console log
  use Formatter userActivity chartActivity 0 async () => {
    _s();
    const res = (0,_hooks_useUserActivity__WEBPACK_IMPORTED_MODULE_3__["default"])(18); //.promise()

    const resF = res.data.sessions.map(function (data) {
      let splitD…
      */

  // const res = userActivity.map(function (value) {
  //   console.log('userActicity test map', value)
  // })
  //Cannot read properties of undefined (reading 'map')
  //userActivity.data.map,userActivity.data.map, ... is not a function
  //Cannot read properties of undefined (reading 'sessions')

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
        {/*userActivity.data.sessions*/}
        <BarChart data={userActivity} barGap={8} /* barCategoryGap={1} */ /* mocked userActivityMock.sessions */>
          {/* userActivity.data.sessions resF data*/}
          <CartesianGrid vertical={false} strokeDasharray="4 4" />
          <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14, fontWeight: 500, fill: '#9B9EAC' }} dy={15} stroke="1 1" />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            tickCount="3"
            axisLine={false}
            orientation="right"
            tickLine={false} //retrait des trait de chaque tick
            tick={{ fontSize: 14 }} // taille legend axe x
            dx={15} // espacement des legend axe x
            domain={['dataMin - 2', 'dataMax + 1']} // permet de définir l'échelle d el'axe des poids si poind min = 69 et poid max =70 then echelle min  = 67, max 74 avec 59 aux milieu, par le même moyen si on devait mettre datamin -1 alors l'échelle serait de 68 à 71 sans milieu
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
