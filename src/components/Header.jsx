import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

export default function Header({ img, alt }) {
  return (
    <header>
      <img src={img} alt={alt} />
      <nav>
        <a href="">Accueil</a>
        <a href="">Profil</a>
        <a href="">Réglage</a>
        <a href="">Communauté</a>
      </nav>
    </header>
  )
}
