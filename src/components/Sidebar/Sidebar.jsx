import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.scss'
import iconMedi from '../../assets/icon-meditation.svg'
import iconSwim from '../../assets/icon-natation.svg'
import iconTrain from '../../assets/icon-musculation.svg'
import iconCycle from '../../assets/icon-velo.svg'

/**
 * The sidebar is a second menu on the dashboard displayed vertically on the left of the screen
 * @component
 * @name Sidebar
 * @returns {JSX.Element} - Return the Sidebar
 */
export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="sidebar__nav">
        <NavLink to="#" className="sidebar__nav__link">
          <img src={iconMedi} alt="" />
        </NavLink>
        <NavLink to="#" className="sidebar__nav__link">
          <img src={iconSwim} alt="" />
        </NavLink>
        <NavLink to="#" className="sidebar__nav__link">
          <img src={iconTrain} alt="" />
        </NavLink>
        <NavLink to="#" className="sidebar__nav__link">
          <img src={iconCycle} alt="" />
        </NavLink>
      </nav>
      <p className="sidebar__copyright">Copiryght, SportSee 2020</p>
    </div>
  )
}
