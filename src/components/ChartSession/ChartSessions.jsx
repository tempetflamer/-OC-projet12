import React, { PureComponent, useRef, useEffect, useState } from 'react'
import { LineChart, Line, AreaChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { USER_AVERAGE_SESSIONS } from '../../mock/dataMocked.js'
import useUserInfos from '../../hooks/useUserInfos.jsx'

import './ChartSession.scss'
import TooltipSession from '../TooltipSession/TooltipSession'

export default function ChartSession({ className, userID, firstRender }) {
  /* export default, error destroy is not a function, 
  export, error export 'default' (imported as 'useUserInfos') was not found in '../../hooks/useUserInfos.js' (possible exports: useUserInfos),
  en retirant async of useEffect pas d'erreur mais pas de résultat*/

  let setData = []
  const request = useUserInfos(userID)
  setData.push(request.data.data)
  console.log('request', request.data, setData)

  /*   const getDataUser = () => {
    // console.log('dernier test data')
    const request = useUserInfos(userID)
    // console.log('request :', request)
    setData.push(request)
    // console.log('résultat du push tableau setData', await setData)
  }
  getDataUser() */
  //4rendus
  // la tooltip sur session apparait au niveau de la souris et pas à coté du rond
  //vérifier que 0 et 8 n'existe pas et le faire
  //console.log(userSession.sessions)

  //
  let userSession = USER_AVERAGE_SESSIONS.find((data) => data.userId === parseInt(userID))
  if (userSession.sessions.find((element) => element.day === 0) === undefined) {
    const foundFirstSession = userSession.sessions.find((element) => element.day === 1)
    const foundLastSession = userSession.sessions.find((element) => element.day === 7)
    //si 1 > 2 alors ça monte
    const calculFirst =
      userSession.sessions.find((element) => element.day === 1).sessionLength -
      userSession.sessions.find((element) => element.day === 2).sessionLength
    const calculLast =
      userSession.sessions.find((element) => element.day === 7).sessionLength -
      userSession.sessions.find((element) => element.day === 6).sessionLength

    console.log('calcul first', calculFirst)
    console.log('calcul last', calculLast)

    calculFirst < 0
      ? userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst
      : userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst

    const newFirstSession = {
      day: 0,
      sessionLength: userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst,
    }

    const newLastSession = {
      day: 8,
      sessionLength: userSession.sessions.find((element) => element.day === 7).sessionLength + calculLast,
    }

    userSession.sessions.unshift(newFirstSession)
    userSession.sessions.push(newLastSession)
    console.log(userSession)

    const ref = useRef(null)

    // si je le met dans une constante ça amrche sinon non, const sessiontest =
    //const userSessionFinal = userSession.sessions.map(function (session) {
    userSession = userSession.sessions.map(function (session) {
      switch (session.day) {
        case 1:
          // console.log(session.day)
          // console.log('entré 1')
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

      //if (session.day === 1) ({ ...session, day: 'L' })
    })

    console.log('after map', userSession /* , userSessionFinal */)
  }

  //try with a bool passed in parameter
  // const userSession = USER_AVERAGE_SESSIONS.find((data) => data.userId === parseInt(userID))
  // if (firstRender === false) {
  //   const userSession = USER_AVERAGE_SESSIONS.find((data) => data.userId === parseInt(userID))
  //   const foundFirstSession = userSession.sessions.find((element) => element.day === 1)
  //   const foundLastSession = userSession.sessions.find((element) => element.day === 7)
  //   //si 1 > 2 alors ça monte
  //   const calculFirst =
  //     userSession.sessions.find((element) => element.day === 1).sessionLength -
  //     userSession.sessions.find((element) => element.day === 2).sessionLength
  //   const calculLast =
  //     userSession.sessions.find((element) => element.day === 7).sessionLength -
  //     userSession.sessions.find((element) => element.day === 6).sessionLength

  //   console.log('calcul first', calculFirst)
  //   console.log('calcul last', calculLast)

  //   calculFirst < 0
  //     ? userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst
  //     : userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst

  //   const newFirstSession = {
  //     day: 0,
  //     sessionLength: userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst,
  //   }

  //   const newLastSession = {
  //     day: 8,
  //     sessionLength: userSession.sessions.find((element) => element.day === 7).sessionLength + calculLast,
  //   }

  //   userSession.sessions.unshift(newFirstSession)
  //   userSession.sessions.push(newLastSession)
  //   console.log(userSession)

  //   const ref = useRef(null)

  //   // si je le met dans une constante ça amrche sinon non, const sessiontest =
  //   const userSessionFinal = userSession.sessions.map(function (session) {
  //     switch (session.day) {
  //       case 1:
  //         // console.log(session.day)
  //         // console.log('entré 1')
  //         return { ...session, day: 'L' }
  //       case 2:
  //         return { ...session, day: 'M' }
  //       case 3:
  //         return { ...session, day: 'M' }
  //       case 4:
  //         return { ...session, day: 'J' }
  //       case 5:
  //         return { ...session, day: 'V' }
  //       case 6:
  //         return { ...session, day: 'S' }
  //       case 7:
  //         return { ...session, day: 'D' }
  //       default:
  //         return { ...session }
  //     }

  //     //if (session.day === 1) ({ ...session, day: 'L' })
  //   })

  //   console.log('after map', userSession, userSessionFinal)

  //   firstRender = true
  // }

  //marche pas
  // const userSession = () => {
  //   const userSession = USER_AVERAGE_SESSIONS.find((data) => data.userId === parseInt(userID))
  //   const foundFirstSession = userSession.sessions.find((element) => element.day === 1)
  //   const foundLastSession = userSession.sessions.find((element) => element.day === 7)
  //   //si 1 > 2 alors ça monte
  //   const calculFirst =
  //     userSession.sessions.find((element) => element.day === 1).sessionLength -
  //     userSession.sessions.find((element) => element.day === 2).sessionLength
  //   const calculLast =
  //     userSession.sessions.find((element) => element.day === 7).sessionLength -
  //     userSession.sessions.find((element) => element.day === 6).sessionLength

  //   console.log('calcul first', calculFirst)
  //   console.log('calcul last', calculLast)

  //   calculFirst < 0
  //     ? userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst
  //     : userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst

  //   const newFirstSession = {
  //     day: 0,
  //     sessionLength: userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst,
  //   }

  //   const newLastSession = {
  //     day: 8,
  //     sessionLength: userSession.sessions.find((element) => element.day === 7).sessionLength + calculLast,
  //   }

  //   userSession.sessions.unshift(newFirstSession)
  //   userSession.sessions.push(newLastSession)
  //   console.log(userSession)

  //   const ref = useRef(null)

  //   // si je le met dans une constante ça amrche sinon non, const sessiontest =
  //   const userSessionF = userSession.sessions.map(function (session) {
  //     switch (session.day) {
  //       case 1:
  //         // console.log(session.day)
  //         // console.log('entré 1')
  //         return { ...session, day: 'L' }
  //       case 2:
  //         return { ...session, day: 'M' }
  //       case 3:
  //         return { ...session, day: 'M' }
  //       case 4:
  //         return { ...session, day: 'J' }
  //       case 5:
  //         return { ...session, day: 'V' }
  //       case 6:
  //         return { ...session, day: 'S' }
  //       case 7:
  //         return { ...session, day: 'D' }
  //       default:
  //         return { ...session }
  //     }

  //     //if (session.day === 1) ({ ...session, day: 'L' })
  //   })

  //   console.log('after map', userSession)
  //   return userSessionF
  // }

  /*
const userSession = USER_AVERAGE_SESSIONS.find((data) => data.userId === parseInt(userID))
  const foundFirstSession = userSession.sessions.find((element) => element.day === 1)
  const foundLastSession = userSession.sessions.find((element) => element.day === 7)
  //si 1 > 2 alors ça monte
  const calculFirst =
    userSession.sessions.find((element) => element.day === 1).sessionLength - userSession.sessions.find((element) => element.day === 2).sessionLength
  const calculLast =
    userSession.sessions.find((element) => element.day === 7).sessionLength - userSession.sessions.find((element) => element.day === 6).sessionLength

  console.log('calcul first', calculFirst)
  console.log('calcul last', calculLast)

  calculFirst < 0
    ? userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst
    : userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst

  const newFirstSession = {
    day: 0,
    sessionLength: userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst,
  }

  const newLastSession = {
    day: 8,
    sessionLength: userSession.sessions.find((element) => element.day === 7).sessionLength + calculLast,
  }

  userSession.sessions.unshift(newFirstSession)
  userSession.sessions.push(newLastSession)
  console.log(userSession)

  const ref = useRef(null)

  // si je le met dans une constante ça amrche sinon non, const sessiontest =
  const userSessionFinal = userSession.sessions.map(function (session) {
    switch (session.day) {
      case 1:
        // console.log(session.day)
        // console.log('entré 1')
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

    //if (session.day === 1) ({ ...session, day: 'L' })
  }) 

  console.log('after map', userSession, userSessionFinal)
  */

  /*  try with run once fn https://www.perssondennis.com/articles/react-hook-use-run-once#user-content-userunonce-hook */

  // execution once also don't seem to work
  //let executed = false

  //work but i can simplified it because dont need all of it, pareil chargé 6 fois
  // var something = (function () {
  //   return function () {
  //     if (!executed) {
  //       executed = true
  //       console.log('test execution')
  //       // do something
  //     }
  //   }
  // })()

  // marche pas est rechargé plusieurs fois, 6 fois
  /*   var something = function () {
    if (!executed) {
      executed = true
      console.log('test execution')
      // do something
    }
  } */

  /*   var something = (function () {
    var executed = false
    return function () {
      if (!executed) {
        console.log('test execution')
        executed = true
        // do something
      }
    }
  })()

  console.log(executed)

  something() // "do something" happens
  something() // nothing happens

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState() */

  useEffect(() => {
    /*  setData([])
    setError(undefined)
    setIsLoading(true)

    try {
      const userSession = USER_AVERAGE_SESSIONS.find((data) => data.userId === parseInt(userID))
      const foundFirstSession = userSession.sessions.find((element) => element.day === 1)
      const foundLastSession = userSession.sessions.find((element) => element.day === 7)
      //si 1 > 2 alors ça monte
      const calculFirst =
        userSession.sessions.find((element) => element.day === 1).sessionLength -
        userSession.sessions.find((element) => element.day === 2).sessionLength
      const calculLast =
        userSession.sessions.find((element) => element.day === 7).sessionLength -
        userSession.sessions.find((element) => element.day === 6).sessionLength

      console.log('calcul first', calculFirst)
      console.log('calcul last', calculLast)

      calculFirst < 0
        ? userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst
        : userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst

      const newFirstSession = {
        day: 0,
        sessionLength: userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst,
      }

      const newLastSession = {
        day: 8,
        sessionLength: userSession.sessions.find((element) => element.day === 7).sessionLength + calculLast,
      }

      userSession.sessions.unshift(newFirstSession)
      userSession.sessions.push(newLastSession)
      console.log(userSession)

      const ref = useRef(null)

      // si je le met dans une constante ça amrche sinon non, const sessiontest =
      const userSessionF = userSession.sessions.map(function (session) {
        switch (session.day) {
          case 1:
            // console.log(session.day)
            // console.log('entré 1')
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

        //if (session.day === 1) ({ ...session, day: 'L' })
      })

      console.log('after map', userSession)
      setError(undefined)
      setIsLoading(false)
      setData(userSessionF)
      //return res.data;
    } catch (e) {
      //console.log(e);
      setData([])
      setError(e)
      setIsLoading(false)
    } */
    //new try again, same as suivant mais rajouté const en dehors //error Invalid hook call
    /*     const foundFirstSession = userSession.sessions.find((element) => element.day === 1)
    const foundLastSession = userSession.sessions.find((element) => element.day === 7)
    //si 1 > 2 alors ça monte
    const calculFirst =
      userSession.sessions.find((element) => element.day === 1).sessionLength -
      userSession.sessions.find((element) => element.day === 2).sessionLength
    const calculLast =
      userSession.sessions.find((element) => element.day === 7).sessionLength -
      userSession.sessions.find((element) => element.day === 6).sessionLength

    console.log('calcul first', calculFirst)
    console.log('calcul last', calculLast)

    calculFirst < 0
      ? userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst
      : userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst

    const newFirstSession = {
      day: 0,
      sessionLength: userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst,
    }

    const newLastSession = {
      day: 8,
      sessionLength: userSession.sessions.find((element) => element.day === 7).sessionLength + calculLast,
    }

    userSession.sessions.unshift(newFirstSession)
    userSession.sessions.push(newLastSession)
    console.log(userSession)

    const ref = useRef(null)

    // si je le met dans une constante ça amrche sinon non, const sessiontest =
    const sessiontest = userSession.sessions.map(function (session) {
      switch (session.day) {
        case 1:
          // console.log(session.day)
          // console.log('entré 1')
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

      //if (session.day === 1) ({ ...session, day: 'L' })
    })
 */
    //new try
    /*
    const userSession = USER_AVERAGE_SESSIONS.find((data) => data.userId === parseInt(userID))
    const foundFirstSession = userSession.sessions.find((element) => element.day === 1)
    const foundLastSession = userSession.sessions.find((element) => element.day === 7)
    //si 1 > 2 alors ça monte
    const calculFirst =
      userSession.sessions.find((element) => element.day === 1).sessionLength -
      userSession.sessions.find((element) => element.day === 2).sessionLength
    const calculLast =
      userSession.sessions.find((element) => element.day === 7).sessionLength -
      userSession.sessions.find((element) => element.day === 6).sessionLength

    calculFirst < 0
      ? userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst
      : userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst

    const newFirstSession = {
      day: 0,
      sessionLength: userSession.sessions.find((element) => element.day === 1).sessionLength + calculFirst,
    }

    const newLastSession = {
      day: 8,
      sessionLength: userSession.sessions.find((element) => element.day === 7).sessionLength + calculLast,
    }

    userSession.sessions.unshift(newFirstSession)
    userSession.sessions.push(newLastSession)
    console.log(userSession)

    const ref = useRef(null)

    // si je le met dans une constante ça amrche sinon non, const sessiontest =
    const sessiontest = userSession.sessions.map(function (session) {
      switch (session.day) {
        case 1:
          console.log(session.day)
          console.log('entré 1')
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

      //if (session.day === 1) ({ ...session, day: 'L' })
    })
    */
    /*
            arrayMedia = arrayMedia.map(function (media) {
            if (media.index === mediaNum) { 
                return { ...media, liked: true } 
            } 
            else { 
                return media 
            } 
        })
        */
    //pk marche pas
    /*
    userSession.session = userSession.sessions.map(function (session) {
      switch (session.day) {
        case 1:
          console.log(session.day)
          console.log('entré 1')
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

      //if (session.day === 1) ({ ...session, day: 'L' })
    })

    console.log('after map', userSession)

    /*     switch (userSession.sessions.day) {
      case 1:
        return { ...userSession.sessions, day: 'L' }
      case 2:
        return { ...userSession.sessions, day: 'M' }
      case 3:
        return { ...userSession.sessions, day: 'M' }
      case 4:
        return { ...userSession.sessions, day: 'J' }
      case 5:
        return { ...userSession.sessions, day: 'V' }
      case 6:
        return { ...userSession.sessions, day: 'S' }
      case 7:
        return { ...userSession.sessions, day: 'D' }
      default:
        return { ...userSession.sessions }
    } */
    //
    // try {
    //   document.querySelectorAll('tspan')[10].setAttribute('x', '15')
    //   document.querySelectorAll('tspan')[16].setAttribute('x', '235')
    // } catch (error) {
    //   console.log(error)
    // }
    //
    //only work on changement, pas au chargement de la page
    // const data = async () => {
    //   const first = await document.querySelectorAll('tspan')[10]
    //   first.setAttribute('x', '15')
    //   const last = await document.querySelectorAll('tspan')[16]
    //   last.setAttribute('x', '235')
    // }
    //data()
  }, [])

  return (
    <article className={className}>
      <div className={className + '__head'}>
        <h2 className={className + '__head__title'}>Durée moyenne des sessions</h2>
      </div>
      <ResponsiveContainer height="100%" width="120%" className="session-responsive" fill="#FF0D0D">
        <AreaChart
          height="100%"
          width="100%"
          data={userSession.sessions} /* barCategoryGap={1} */
          onMouseMove={(e) => {
            const div = document.getElementsByClassName('session-responsive')[0]
            if (e.isTooltipActive) {
              const windowWidth = div.clientWidth
              const mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100)
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1) 100%)`
            }
          }}
          fill="#FF0D0D"
        >
          <XAxis
            className="xAxis"
            dataKey="day"
            //type="number" // allow to compte normally 0, 2, 6, 6, 8 excepté avec datamax ou le premier commence à 0 au lieu de 0
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, stroke: 'white', opacity: 0.8 /* , padding: { right: 15, left: 15 } marche pas*/ /* , width: 100 */ }}
            padding={{ left: -15, right: 25 }} //à -18 le premeir n'est plus pris en compte 0 mais cela
            //domain={['dataMin', 'dataMax + 1']} //sert plus/pas
            /* dy={15} */ stroke="1 1"
            dy={-50}
            //dx={(-15, -15)}
            dx={-8}
            minTickGap={3} // =default 5
            interval="preserveStartEnd"
            //offset={8} //marche pas
            //tickInterval={5} //change rien
            //xAxisId={0}
            label={{
              position: 'bottom',
            }}
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
            fill="#FF0D0D" //before FF4D4D
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: 'white' /* , onMouseOver: '' */ }}
          />
          <ReferenceLine strokeWidth={5} />
        </AreaChart>
      </ResponsiveContainer>

      {/* {console.log('querryselector : ', document.querySelectorAll('.recharts-cartesian-axis-ticks g text tspan')[4])} */}

      {/* important d emetrte en place */}
      {/* {console.log('querryselector tspan : ', document.querySelectorAll('tspan')[10])}
      {console.log('querryselector tspan last: ', document.querySelectorAll('tspan')[16])}
      {console.log('querryselector getAttribute: ', document.querySelectorAll('tspan')[16].getAttribute('x'))}
      {document.querySelectorAll('tspan')[10].setAttribute('x', '15')}
      {document.querySelectorAll('tspan')[16].setAttribute('x', '235')} */}
    </article>

    // (
    //   const firstLegendX = document.querySelector(".recharts-cartesian-axis-ticks g text span");
    // )
  )
}
