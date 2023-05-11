import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import './Header.scss'

export default function Header({ img, alt }) {
  return (
    <header>
      <img src={img} alt={alt} />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglage</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </nav>
    </header>
  )
}

Header.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
}
