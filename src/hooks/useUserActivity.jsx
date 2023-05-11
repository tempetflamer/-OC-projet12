import { api } from '../utils/getDataApi.js'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

/**
 * Get User Activity {data, isLoading, error}
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

useUserActivity.propTypes = {
  id: PropTypes.number,
}
