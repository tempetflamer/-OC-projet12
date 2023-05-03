import { api } from '../utils/getDataApi.js'
import { useEffect, useState } from 'react'

export default function useUserInfos(id) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const getUserInfos = async (id) => {
    try {
      const res = await api.get(`/user/${id}`)
      return res.data
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    setData([])
    setError(undefined)
    setIsLoading(true)

    const getUserInfos = async (id) => {
      try {
        const res = await api.get(`/user/${id}`)
        setError(undefined)
        setIsLoading(false)
        console.log('res', res)
        console.log('res.data', res.data)
        setData(res.data)
      } catch (e) {
        setData([])
        setError(e)
        setIsLoading(false)
      }
    }
    getUserInfos(id)

    // try {
    //   //const res = api.get(`/user/${id}`)
    //   const res = getUserInfos(id)
    //   setError(undefined)
    //   setIsLoading(false)
    //   console.log('res', res)
    //   console.log('res.data', res.data)
    //   setData(res.data)
    // } catch (e) {
    //   setData([])
    //   setError(e)
    //   setIsLoading(false)
    // }
  }, [])
  console.log('data', data)
  return { data, isLoading, error }
}
