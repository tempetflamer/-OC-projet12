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

    const getUserInfos = async (id) => {
      try {
        const res = await api.get(`/user/${id}`)
        setError(undefined)
        setIsLoading(false)
        // console.log('res', res)
        // console.log('res.data', res.data)
        setData(res.data.data)
      } catch (e) {
        setData([])
        setError(e)
        setIsLoading(false)
      }
    }
    getUserInfos(id)
  }, [])
  console.log('data', data)
  return { data, isLoading, error }
}
