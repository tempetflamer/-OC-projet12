import React from 'react'
import UserKeyData from '../UserKeyData/UserKeyData'
import './userPerf.scss'
import iconEnergy from '../../assets/energy.svg'
import iconChicken from '../../assets/chicken.svg'
import iconApple from '../../assets/apple.svg'
import iconBurger from '../../assets/cheeseburger.svg'

export default function userPerf({ userInfo }) {
  return (
    <section className="perfs">
      <UserKeyData userInfo={userInfo.keyData.calorieCount} unite="Calories" abbUnite="kCal" color="red" icon={iconEnergy} />
      <UserKeyData userInfo={userInfo.keyData.proteinCount} unite="Proteines" abbUnite="g" color="blue" icon={iconChicken} />
      <UserKeyData userInfo={userInfo.keyData.carbohydrateCount} unite="Glucides" abbUnite="g" color="yellow" icon={iconApple} />
      <UserKeyData userInfo={userInfo.keyData.lipidCount} unite="Lipides" abbUnite="g" color="pink" icon={iconBurger} />
    </section>
  )
}
