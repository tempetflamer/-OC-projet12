import React from 'react'

import './HeroText.scss'

export default function HeroText({ firstname }) {
  return (
    <section className="hero">
      <h1 className="hero__title">
        Bonjour <span className="hero__title__firstname">{firstname}</span>
      </h1>
      <p className="hero__text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  )
}
