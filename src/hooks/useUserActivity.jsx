import { api } from '../utils/getDataApi.js'
import { useEffect, useState } from 'react'

export default function useUserActivity(id) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setData([])
    setError(undefined)
    setIsLoading(true)

    const getUserInfos = async (id) => {
      try {
        let res = await api.get(`/user/${id}/activity`)
        console.log('res activity userActivity', res)
        // const resF = res.data.data.sessions.map(function (data) {
        //   let splitDays = data.day.split('-').pop()
        //   if (splitDays.charAt(0) === '0') {
        //     splitDays = splitDays.substring(1)
        //   }
        //   return { ...data, day: splitDays }
        // })
        setError(undefined)
        setIsLoading(false)
        //setData(resF)
        setData(res.data.data)
      } catch (e) {
        setData([])
        setError(e)
        setIsLoading(false)
      }
    }
    getUserInfos(id)
  }, [])
  console.log('data activity fetch', data)
  return { data, isLoading, error }
}
