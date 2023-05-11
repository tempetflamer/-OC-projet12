import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useUserInfos from '../../hooks/useUserInfos.jsx'
import './HeroText.scss'

/**
 * Render the hero text for the user
 * @return {JSX}
 */
export default function HeroText() {
  const { userID } = useParams()
  const [firstname, setFirstname] = useState()
  const { data, isLoading, error } = useUserInfos(userID)

  useEffect(() => {
    if (!isLoading && !error && data.id) {
      const name = data.userInfos.firstName
      setFirstname(name)
    }
  }, [data, isLoading, error])

  if (!firstname) {
    return ''
  }
  return (
    <section className="hero">
      <h1 className="hero__title">
        Bonjour <span className="hero__title__firstname">{firstname}</span>
      </h1>
      <p className="hero__text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  )
}
