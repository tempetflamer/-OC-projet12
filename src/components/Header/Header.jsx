import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Header.scss'

/**
 * Display Header
 * @component
 * @name Header
 * @param {string} img - path of the logo picture
 * @param {string} alt - alternative text of the logo
 * @returns {JSX.Element} - Return the Header which contains the logo and the navigation bar
 */
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
  /**
   * Logo
   */
  img: PropTypes.string,
  /**
   * Description du logo
   */
  alt: PropTypes.string,
}
