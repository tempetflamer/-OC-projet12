import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import useUserSession from '../../hooks/useUserSession'
import TooltipSession from '../TooltipSession/TooltipSession'
import './ChartSession.scss'

/**
 * Render a AreaChart with user average sessions data
 * @param {string} className
 * @return {JSX}
 */
export default function ChartSession({ className }) {
  const { userID } = useParams()
  const refEventChart = useRef(0)

  let userSession = useUserSession(userID)
  const formatData = async () => {
    userSession = userSession.data.data.sessions.map(function (session) {
      switch (session.day) {
        case 1:
          return { ...session, day: 'L' }
        case 2:
          return { ...session, day: 'M' }
        case 3:
          return { ...session, day: 'M' }
        case 4:
          return { ...session, day: 'J' }
        case 5:
          return { ...session, day: 'V' }
        case 6:
          return { ...session, day: 'S' }
        case 7:
          return { ...session, day: 'D' }
        default:
          return { ...session }
      }
    })
  }
  formatData()

  function handleHover(e) {
    const div = refEventChart.current.current
    if (e.isTooltipActive) {
      const windowWidth = div.clientWidth
      const mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100)
      div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,0.5) ${mouseXpercentage}%, rgba(175,0,0,0.5) 100%)`
    } else if (!e.mouseover) {
      div.style.background = `none`
    }
  }

  return (
    <article className={className}>
      <div className={className + '__head'}>
        <h2 className={className + '__head__title'}>Durée moyenne des sessions</h2>
      </div>
      <ResponsiveContainer height="100%" width="100%" className="session-responsive" ref={refEventChart} fill="#FF0D0D">
        <AreaChart height="100%" width="100%" data={userSession} onMouseMove={(e) => handleHover(e)} fill="#FF0D0D">
          <XAxis
            className="xAxis"
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, stroke: 'white', opacity: 0.8 }}
            padding={{ left: -5, right: -5 }}
            stroke="1 1"
            dy={-50}
            interval="preserveStartEnd"
            mirror={true}
          />
          <YAxis dataKey="sessionLength" type="number" hide={true} />
          <Tooltip content={<TooltipSession />} wrapperStyle={{ outline: 'none' }} cursor={false} />
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="#ffffff"
            fill="none"
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: 'white' }}
          />
          <ReferenceLine strokeWidth={5} />
        </AreaChart>
      </ResponsiveContainer>
    </article>
  )
}
