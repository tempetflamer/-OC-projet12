import { api } from '../utils/getDataApi.js'
import { useEffect, useState } from 'react'

/**
 * Get User Activity Hook
 * @param {Number} id
 * @returns {Object} data, isLoading, error
 */
export default function useUserActivity(id) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setData([])
    setError(undefined)
    setIsLoading(true)

    /**
     * Get User Activity and set setData, setIsLoading, setError
     * @param {Number} id
     */
    const getUserInfos = async (id) => {
      try {
        const res = await api.get(`/user/${id}/activity`)
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
  return { data, isLoading, error }
}
