import React, { PureComponent } from 'react'
import { LineChart, Line, AreaChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import './ChartSession.scss'
import TooltipSession from '../TooltipSession/TooltipSession'

export default function ChartSession({ userSession, className }) {
  console.log(userSession.sessions)

  const datatest = [
    {
      name: 1,
      uv: 4000,
    },
    {
      name: 2,
      uv: 3000,
    },
    {
      name: 3,
      uv: 2000,
    },
    {
      name: 4,
      uv: 2780,
    },
    {
      name: 5,
      uv: 1890,
    },
    {
      name: 6,
      uv: 2390,
    },
    {
      name: 7,
      uv: 3490,
    },
  ]
  const datatest2 = [
    {
      day: 1,
      sessionLength: 4000,
    },
    {
      day: 2,
      sessionLength: 3000,
    },
    {
      day: 3,
      sessionLength: 2000,
    },
    {
      day: 4,
      sessionLength: 2780,
    },
    {
      day: 5,
      sessionLength: 1890,
    },
    {
      day: 6,
      sessionLength: 2390,
    },
    {
      day: 7,
      sessionLength: 3490,
    },
  ]
  return (
    <article className={className}>
      <div className={className + '__head'}>
        <h2 className={className + '__head__title'}>Durée moyenne des sessions</h2>
      </div>
      <ResponsiveContainer height="80%" width="100%">
        <AreaChart height="85%" width="100%" data={userSession.sessions} /* barCategoryGap={1} */>
          {/*           <CartesianGrid vertical={false} strokeDasharray="4 4" />
          <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14 }} dy={15} stroke="1 1" />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            //domain={['dataMin - 2', 'dataMax + 1']}
            tickCount="3"
            axisLine={false}
            orientation="right"
            tickLine={false} //retrait des trait de chaque tick
            tick={{ fontSize: 14 }} // taille legend axe x
            dx={15} // espacement des legend axe x
          />
          <YAxis yAxisId="calories" dataKey="calories" type="number" hide={true} />
          <Tooltip content="" />
          <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
          <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} /> */}
          <XAxis
            dataKey="day"
            //type="number" // allow to compte normally 0, 2, 6, 6, 8 excepté avec datamax ou le premier commence à 0 au lieu de 0
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, stroke: 'white', opacity: 0.8 }}
            padding={{ right: 5, left: 5 }}
            //domain={['dataMin', 'dataMax + 1']} //sert plus/pas
            /* dy={15} */ stroke="1 1"
          />
          <YAxis dataKey="sessionLength" type="number" hide={true} /> {/* sessionLength => minute */}
          <Tooltip content={<TooltipSession />} wrapperStyle={{ outline: 'none' }} />{' '}
          {/* wrapperStyle={{ outline: "none" }} permet d'enlever le cadre noir à l'intérieur de la toolbox */}
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="#ffffff"
            fill="#FF4D4D"
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: 'white' }}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/*  <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={userSession.sessions}
          strokeWidth={1}
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
              let div = document.querySelector('.bUPtxZ')
              let windowWidth = div.clientWidth
              let mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100)
              // @ts-ignore
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
            }
          }}
        >
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke="red"
            padding={{ right: 5, left: 5 }}
            tick={{ fontSize: 13, stroke: 'white', opacity: 0.8 }}
          />
          <YAxis dataKey="sessionLength" domain={[0, 'dataMax + 30']} hide={true} />
          <Tooltip content="" />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: 'white' }}
          />
        </LineChart>
      </ResponsiveContainer> */}

      {/* Lui, il marche, classic */}
      {/*       <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={500} height={400} data={datatest}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer> */}
    </article>
  )
}

/* marche pas l'exemple
export default class ChartSession extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw'

  render() {
    const data = [
      {
        name: 'Page A',
        uv: 4000,
      },
      {
        name: 'Page B',
        uv: 3000,
      },
      {
        name: 'Page C',
        uv: 2000,
      },
      {
        name: 'Page D',
        uv: 2780,
      },
      {
        name: 'Page E',
        uv: 1890,
      },
      {
        name: 'Page F',
        uv: 2390,
      },
      {
        name: 'Page G',
        uv: 3490,
      },
    ]
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}
*/
