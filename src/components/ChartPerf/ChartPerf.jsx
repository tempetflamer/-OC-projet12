import React, { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import useUserPerf from '../../hooks/useUserPerf'
import './ChartPerf.scss'

/**
 * Render a RadarChart with user performance data
 * @param {string} className
 * @return {JSX}
 */
export default function ChartPerf({ className }) {
  const { userID } = useParams()
  // //* en faite je peux récupérer l'id directement dans useparam sur chaque page plutôt que de le transmettre
  // const [data, setData] = useState([])

  // //* use effect marche pas, aucune donnée ne charge, data null
  // useEffect(() => {
  //   async function dataPerf() {
  //     const request = await useUserPerf(18)
  //     console.log('request chartPerf', request)
  //     if (!request) return alert('data error')
  //     const formatData = request.data.data.map((data) => {
  //       switch (data.kind) {
  //         case 1:
  //           return { ...data, kind: 'Cardio' }
  //         case 2:
  //           return { ...data, kind: 'Energie' }
  //         case 3:
  //           return { ...data, kind: 'Endurance' }
  //         case 4:
  //           return { ...data, kind: 'Force' }
  //         case 5:
  //           return { ...data, kind: 'Vitesse' }
  //         case 6:
  //           return { ...data, kind: 'Intensité' }
  //         default:
  //           return { ...data }
  //       }
  //     })
  //     setData(formatData)
  //   }
  //   dataPerf()
  //   console.log('data intégré en focntion', data)
  // }, [])

  // console.log('data test', data)

  //* Infinite loop // sans async Cannot read properties of undefined (reading 'map')
  // async function dataPerf() {
  //   const request = await useUserPerf(18)
  //   console.log('request chartPerf', request)
  //   if (!request) return alert('data error')
  //   const formatData = request.data.data.map((data) => {
  //     switch (data.kind) {
  //       case 1:
  //         return { ...data, kind: 'Cardio' }
  //       case 2:
  //         return { ...data, kind: 'Energie' }
  //       case 3:
  //         return { ...data, kind: 'Endurance' }
  //       case 4:
  //         return { ...data, kind: 'Force' }
  //       case 5:
  //         return { ...data, kind: 'Vitesse' }
  //       case 6:
  //         return { ...data, kind: 'Intensité' }
  //       default:
  //         return { ...data }
  //     }
  //   })
  //   setData(formatData)
  // }
  //const getData = useMemo(dataPerf(), []) //TypeError: nextCreate is not a function //http://localhost:3001/dashboard/18
  //dataPerf()
  //console.log('data intégré en focntion', data /* , getData */)

  /*
*(in promise) TypeError: Cannot read properties of undefined (reading 'map') => next =>
*valid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1.You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
*/
  //data.length === 0 ? dataPerf() : ''
  // if (data.length === 0) {
  //   dataPerf()
  //   console.log('data intégré en focntion', data /* , getData */)
  // }

  //* base Cannot read properties of undefined (reading 'map')
  // let res = useUserPerf(userID)
  // console.log('userPerf chartperf', res, res.data.data) // si je fais res.data.data ça marche pas alors que pourtant il y'a encore un élément data dedans
  // if (!res) return alert('data error')
  // const formatData = res.data.data.map((data) => {
  //   switch (data.kind) {
  //     case 1:
  //       return { ...data, kind: 'Cardio' }
  //     case 2:
  //       return { ...data, kind: 'Energie' }
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

  //* Base + C'est bon ça marche finalement
  let res = useUserPerf(userID)
  console.log('userPerf chartperf', res, res.data.data)
  const formatData = async () => {
    res = res.data.data.map((data) => {
      switch (data.kind) {
        case 1:
          return { ...data, kind: 'Cardio' }
        case 2:
          return { ...data, kind: 'Energie' }
        case 3:
          return { ...data, kind: 'Endurance' }
        case 4:
          return { ...data, kind: 'Force' }
        case 5:
          return { ...data, kind: 'Vitesse' }
        case 6:
          return { ...data, kind: 'Intensité' }
        default:
          return { ...data }
      }
    })
    res = res.reverse() //pour réordonner le tableau dans le sens contraire
  }
  formatData()
  console.log('res test async conv', res)

  // useEffect(() => {
  //   const data = async () => {
  //     const request = await useUserPerf(18)
  //     console.log('request chartPerf', request)
  //     if (!request) return alert('data error')
  //     const formatData = request.data.data.map((data) => {
  //       switch (data.kind) {
  //         case 1:
  //           return { ...data, kind: 'Cardio' }
  //         case 2:
  //           return { ...data, kind: 'Energie' }
  //         case 3:
  //           return { ...data, kind: 'Endurance' }
  //         case 4:
  //           return { ...data, kind: 'Force' }
  //         case 5:
  //           return { ...data, kind: 'Vitesse' }
  //         case 6:
  //           return { ...data, kind: 'Intensité' }
  //         default:
  //           return { ...data }
  //       }
  //     })
  //     setData(formatData)
  //   }
  //   data()
  // }, [])
  // console.log('data de merde', data)
  // if (data.length === 0) return null

  // useEffect(() => {
  //   setData([])

  //   try {
  //     let res = useFormaterUserPerf(18)
  //     console.log('userPerf0', res)
  //     console.log('userPerf', res.data.data)

  //     const resF = res.map(function (data) {
  //       switch (data.kind) {
  //         case 1:
  //           return { ...data, kind: 'Cardio' }
  //         case 2:
  //           return { ...data, kind: 'Énergie' }
  //         case 3:
  //           return { ...data, kind: 'Endurance' }
  //         case 4:
  //           return { ...data, kind: 'Force' }
  //         case 5:
  //           return { ...data, kind: 'Vitesse' }
  //         case 6:
  //           return { ...data, kind: 'Intensité' }
  //         default:
  //           return { ...data }
  //       }
  //     })
  //     console.log('resF in ChartPerf : ', resF)

  //     setData(resF)
  //   } catch (e) {
  //     setData([])
  //   }

  //   //console.log('getUser : ', getUserInfos(18))
  // }, [])

  //useFormaterUserPerf // je n'arrive tout simplement pas à utilsier le map après reception des données

  //base fonctionelle important
  // const res = useUserPerf(userID)
  // console.log('userPerf chartperf', res, res.data.data) // si je fais res.data.data ça marche pas alors que pourtant il y'a encore un élément data dedans

  // console.log('test si array : ', res.data.isArray())

  // const map = new Map()
  // Object.keys(res).forEach((key) => {
  //   map.set(key, res[key])
  // })

  // console.log('map', map)

  // const resF = res.data.map(function (data) {
  //   switch (data.kind) {
  //     case 1:
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
  // console.log('resF in ChartPerf : ', resF)

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
  //console.log(userPerf)
  return (
    <article className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={res} width="100%" height="100%">
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
          <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  )
}
