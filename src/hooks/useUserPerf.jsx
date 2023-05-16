import { api } from '../utils/getDataApi.js'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

/**
 * Hook to get User Performance
 * @function
 * @name useUserPerf
 * @param {number} id - user ID
 * @returns {object} - Return {data, isLoading, error} to manage the state of the hook
 */
export default function useUserPerf(id) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setData([])
    setError(undefined)
    setIsLoading(true)

    /**
     * Set setData, setIsLoading, setError with User Performance data
     * @function
     * @name getUserPerf
     * @memberof useUserPerf
     * @param {Number} id
     */
    const getUserPerf = async (id) => {
      try {
        const res = await api.get(`/user/${id}/performance`)
        setError(undefined)
        setIsLoading(false)
        setData(res.data.data)
      } catch (e) {
        setData([])
        setError(e)
        setIsLoading(false)
      }
    }
    getUserPerf(id)
  }, [])
  return { data, isLoading, error }
}

useUserPerf.propTypes = {
  id: PropTypes.number,
}
