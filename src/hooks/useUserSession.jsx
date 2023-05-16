import { api } from '../utils/getDataApi.js'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

/**
 * Hook to get User Sessions
 * @function
 * @name useUserSessions
 * @param {number} id - user ID
 * @returns {object} - Return {data, isLoading, error} to manage the state of the hook
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
     * @function
     * @name getUserSession
     * @memberof useUserSessions
     * @param {Number} id
     */
    const getUserSession = async (id) => {
      try {
        const res = await api.get(`/user/${id}/average-sessions`)
        setError(undefined)
        setIsLoading(false)
        setData(res.data.data)
      } catch (e) {
        setData([])
        setError(e)
        setIsLoading(false)
      }
    }
    getUserSession(id)
  }, [])
  return { data, isLoading, error }
}

useUserInfos.propTypes = {
  id: PropTypes.number,
}
