import { api } from '../utils/getDataApi.js'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

/**
 * Hook to get User Activity
 * @function
 * @name useUserActivity
 * @param {number} id - user ID
 * @returns {object} - Return {data, isLoading, error} to manage the state of the hook
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
     * Set setData, setIsLoading and setError with User Activity data
     * @function
     * @name getUserActivity
     * @memberof useUserActivity
     * @param {Number} id - user ID
     */
    const getUserActivity = async (id) => {
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
    getUserActivity(id)
  }, [])
  return { data, isLoading, error }
}

useUserActivity.propTypes = {
  id: PropTypes.number,
}
