import { api } from '../utils/getDataApi.js'
import { useEffect, useState } from 'react'
import useUserActivity from './useUserActivity'

export default function useFormatter(id) {
  const [data, setData] = useState([])

  const formatData = async () => {
    return await useUserActivity(id)
  }
  const b = formatData()
  console.log('formatData', b)

  const dataF = b.data.data.sessions.map(function (data) {
    let splitDays = data.day.split('-').pop()
    if (splitDays.charAt(0) === '0') {
      splitDays = splitDays.substring(1)
    }
    return { ...data, day: splitDays }
  })

  //setData(dataF)

  return { data }
}
