import React, { PureComponent, useRef, useEffect, useState } from 'react'
import { LineChart, Line, AreaChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { USER_AVERAGE_SESSIONS } from '../../mock/dataMocked.js'
import useUserInfos from '../../hooks/useUserInfos.jsx'
import useUserSession from '../../hooks/useUserSession'

import './ChartSession.scss'
import TooltipSession from '../TooltipSession/TooltipSession'

export default function ChartSession({ className, userID }) {
  const refEventChart = useRef(0)
  // let setData = []
  // const request = useUserInfos(userID)
  // setData.push(request.data.data)
  // console.log('request', request.data, setData)

  //mocked data
  const userSession = USER_AVERAGE_SESSIONS.find((data) => data.userId === parseInt(userID))
  console.log('userSession', userSession)

  // let setData = []
  // const reqUserSession = useUserSession(userID)
  // const userSession = reqUserSession.data.data
  // // setData.push(userSession.data.sessions)
  // console.log('request2', reqUserSession, userSession /* , setData */) //  TypeError: Cannot read properties of undefined (reading 'sessions')

  // const res = userSession.sessions.map(function (session) {
  //   switch (session.day) {
  //     case 1:
  //       return { ...session, day: 'L' }
  //     case 2:
  //       return { ...session, day: 'M' }
  //     case 3:
  //       return { ...session, day: 'M' }
  //     case 4:
  //       return { ...session, day: 'J' }
  //     case 5:
  //       return { ...session, day: 'V' }
  //     case 6:
  //       return { ...session, day: 'S' }
  //     case 7:
  //       return { ...session, day: 'D' }
  //     default:
  //       return { ...session }
  //   }
  // })

  //4rendus
  // la tooltip sur session apparait au niveau de la souris et pas à coté du rond
  //vérifier que 0 et 8 n'existe pas et le faire
  //console.log(userSession.sessions)

  //

  function handleHover(e) {
    //const div = document.getElementsByClassName('session-responsive')[0]
    const div = refEventChart.current
    if (e.isTooltipActive) {
      const windowWidth = div.clientWidth
      const mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100)
      // div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1) 100%)`
      //div.style.backgroundColor = `linear-gradient(90deg, rgba(255,0,0,0) ${mouseXpercentage}%, rgba(0,0,0,0.2) ${mouseXpercentage}%, rgba(0,0,0,0.2) 100%)`
      refEventChart.current.style.backgroundColor = 'blue'
    } /* else if (!e.isTooltipActive) {
              div.style.background = `rgba(255,0,0,0)`
            } */ else if (!div.mouseover) {
      div.style.backgroundColor = `rgba(255,0,0,0)`
    }
  }

  return (
    <article className={className}>
      <div className={className + '__head'}>
        <h2 className={className + '__head__title'}>Durée moyenne des sessions</h2>
      </div>
      <ResponsiveContainer height="100%" width="100%" className="session-responsive" ref={refEventChart} fill="#FF0D0D">
        <AreaChart
          height="100%"
          width="100%"
          data={userSession.sessions} /* barCategoryGap={1} */
          onMouseMove={(e) => {
            const div = refEventChart.current.current
            if (e.isTooltipActive) {
              const windowWidth = div.clientWidth
              const mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100)
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1) 100%)`
            } else if (!e.mouseover) {
              /* !div. */
              div.style.background = `rgba(255,0,0,0)`
            }
          }}
          //second tentative
          //onMouseMove={(e) => handleHover(e)}
          //
          fill="#FF0D0D"
        >
          <XAxis
            className="xAxis"
            dataKey="day"
            //type="number" // allow to compte normally 0, 2, 6, 6, 8 excepté avec datamax ou le premier commence à 0 au lieu de 0
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, stroke: 'white', opacity: 0.8 /* , padding: { right: 15, left: 15 } marche pas*/ /* , width: 100 */ }}
            padding={{ left: -5, right: -5 }} //à -18 le premeir n'est plus pris en compte 0 mais cela
            //domain={['dataMin', 'dataMax + 1']} //sert plus/pas
            /* dy={15} */ stroke="1 1"
            dy={-50}
            //dx={(-15, -15)}
            // dx={-8}
            dx={{ left: 55, right: 55 }}
            minTickGap={3} // =default 5
            interval="preserveStartEnd"
            //offset={8} //marche pas
            //tickInterval={5} //change rien
            //xAxisId={0}
            /* label={{
              position: 'bottom',
            }} */
            //x={[10, 20, 30, 40, 50, 60, 70]}
            //tickMargin={{ right: 0 }} // marche aps error
            //tickMargin={5} // change la hauteur el la legend ce que jai mis en dy
            //ticks={[1, 2, 3, 4, 5, 6, 7]}
            //domain={[1, 7]}
            mirror={true} // allow to see label inside the chart au lieu d'outside
            //scale="auto"
          />
          <YAxis dataKey="sessionLength" type="number" hide={true} /> {/* sessionLength => minute */}
          <Tooltip content={<TooltipSession />} wrapperStyle={{ outline: 'none' }} cursor={false} />{' '}
          {/* wrapperStyle={{ outline: "none" }} permet d'enlever le cadre noir à l'intérieur de la toolbox */}
          <Area
            className="areaTest"
            type="monotone"
            dataKey="sessionLength"
            stroke="#ffffff"
            fill="rgba(255,0,0,0)" //before FF4D4D - rgba(255,0,0,0) - #FF0D0D
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: 'white' /* , onMouseOver: '' */ }}
          />
          <ReferenceLine strokeWidth={5} />
        </AreaChart>
      </ResponsiveContainer>
    </article>

    // (
    //   const firstLegendX = document.querySelector(".recharts-cartesian-axis-ticks g text span");
    // )
  )
}
