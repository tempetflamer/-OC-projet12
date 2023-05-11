import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserKeyData from '../UserKeyData/UserKeyData'
import useUserInfos from '../../hooks/useUserInfos.jsx'
import './UserPerf.scss'
import iconEnergy from '../../assets/energy.svg'
import iconChicken from '../../assets/chicken.svg'
import iconApple from '../../assets/apple.svg'
import iconBurger from '../../assets/cheeseburger.svg'

/**
 * Display of the section containing all userKeyDatas
 */
export default function userPerf() {
  const { userID } = useParams()
  const [keyData, setKeyData] = useState()
  const { data, isLoading, error } = useUserInfos(userID)

  useEffect(() => {
    if (!isLoading && !error && data.id) {
      const keyData = data.keyData
      setKeyData(keyData)
    }
  }, [data, isLoading, error])

  if (!keyData) {
    return ''
  }
  return (
    <section className="perfs">
      <UserKeyData userInfo={keyData.calorieCount} unite="Calories" abbUnite="kCal" color="red" icon={iconEnergy} />
      <UserKeyData userInfo={keyData.proteinCount} unite="Proteines" abbUnite="g" color="blue" icon={iconChicken} />
      <UserKeyData userInfo={keyData.carbohydrateCount} unite="Glucides" abbUnite="g" color="yellow" icon={iconApple} />
      <UserKeyData userInfo={keyData.lipidCount} unite="Lipides" abbUnite="g" color="pink" icon={iconBurger} />
    </section>
  )
}
