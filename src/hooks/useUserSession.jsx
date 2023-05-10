import { api } from '../utils/getDataApi.js'
import { useEffect, useState } from 'react'

/**
 * Get User Average Session Hook
 * @param {Number} id
 * @returns {Object} data, isLoading, error
 */
export default function useUserInfos(id) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setData([])
    setError(undefined)
    setIsLoading(true)

    /**
     * Get user Average Session and set setData, setIsLoading, setError
     * @param {Number} id
     */
    const formatUserSession = async (id) => {
      try {
        const res = await api.get(`/user/${id}/average-sessions`)
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
  return { data, isLoading, error }
}
