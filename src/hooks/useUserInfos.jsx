import { api } from '../utils/getDataApi.js'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

/**
 * Hook to get User Infos
 * @function
 * @name useUserInfos
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
     * Set setData, setIsLoading, setError with User Infos data
     * @name getUserInfos
     * @param {Number} id
     */
    const getUserInfos = async (id) => {
      try {
        const res = await api.get(`/user/${id}`)
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

useUserInfos.propTypes = {
  id: PropTypes.number,
}
