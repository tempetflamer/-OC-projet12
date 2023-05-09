import { api } from '../utils/getDataApi.js'
import { useEffect, useState } from 'react'

export default function useUserInfos(id) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setData([])
    setError(undefined)
    setIsLoading(true)

    // let res = api.get(`/user/${id}/average-sessions`)
    // console.log('res session', res)
    // console.log('res.data session ', res.data)

    const formatUserSession = async (id) => {
      try {
        let res = await api.get(`/user/${id}/average-sessions`)
        console.log('retour api', res)
        // res = res.data.data.sessions.map(function (session) {
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
        console.log('tab', res)
        setError(undefined)
        setIsLoading(false)
        setData(res.data)
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
