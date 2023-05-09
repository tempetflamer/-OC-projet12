import { getUserPerformance } from '../utils/getDataApi.js'

import { api } from '../utils/getDataApi.js'
import { useEffect, useState } from 'react'

export default function useUserPerf(id) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setData([])
    setError(undefined)
    setIsLoading(true)

    const getUserInfos = async (id) => {
      try {
        let res = await api.get(`/user/${id}/performance`)
        console.log('res perf', res)
        //console.log('res perf data', res.data.data.data)
        // res = res.data.data.data.map(function (data) {
        //   switch (data.kind) {
        //     case 1:
        //       console.log('entrée 1', data.kind)
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
        // console.log('res perf 2', res)
        //res = res.data.data.data // retourner directement res.data.data.data ne marche aps  => directement retoruner la partie qu'on veut // ah ba si ça remarche //ça remache plus ?????
        setError(undefined)
        setIsLoading(false)
        setData(res.data.data)
      } catch (e) {
        setData([])
        setError(e)
        setIsLoading(false)
      }
    }
    getUserInfos(id)
  }, [])
  console.log('data perf fetch', data)
  return { data, isLoading, error }
}

/*

    const formatUserSession = async (id) => {
      try {
        let res = await api.get(`/user/${id}/average-sessions`)
        console.log('retour api', res)
        res = res.data.data.sessions.map(function (session) {
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
        console.log('tab', res)
        setError(undefined)
        setIsLoading(false)
        setData(res)
      } catch (e) {
        setData([])
        setError(e)
        setIsLoading(false)
      }
    }
    formatUserSession(id)
  }, [])
  console.log('data sessions', data)
  return { data, isLoading, error }
}

*/
