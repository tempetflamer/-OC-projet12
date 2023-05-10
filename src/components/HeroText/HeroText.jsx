import React from 'react'
import { useParams } from 'react-router-dom'
import useUserInfos from '../../hooks/useUserInfos.jsx'
import './HeroText.scss'

/**
 * Render the hero text for the user
 * @return {JSX}
 */
export default function HeroText() {
  const { userID } = useParams()
  const userInfo = useUserInfos(userID)
  const firstname = userInfo?.data?.userInfos?.firstName

  return (
    <section className="hero">
      <h1 className="hero__title">
        Bonjour <span className="hero__title__firstname">{firstname}</span>
      </h1>
      <p className="hero__text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  )
}
