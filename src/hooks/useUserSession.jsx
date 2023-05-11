import { api } from '../utils/getDataApi.js'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

/**
 * Get User Average Session {data, isLoading, error}
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
     * Set setData, setIsLoading, setError with User Average Session
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

useUserInfos.propTypes = {
  id: PropTypes.number,
}
