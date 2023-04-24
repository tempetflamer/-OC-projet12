import React from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.scss'
import iconMedi from '../../assets/icon-meditation.svg'
import iconSwim from '../../assets/icon-natation.svg'
import iconTrain from '../../assets/icon-musculation.svg'
import iconCycle from '../../assets/icon-velo.svg'

export default function Sidebar({ img, alt }) {
  return (
    <div className="sidebar">
      <nav className="sidebar__nav">
        <a className="sidebar__nav__link" href="">
          <img src={iconMedi} alt="" />
        </a>
        <a className="sidebar__nav__link" href="">
          <img src={iconSwim} alt="" />
        </a>
        <a className="sidebar__nav__link" href="">
          <img src={iconTrain} alt="" />
        </a>
        <a className="sidebar__nav__link" href="">
          <img src={iconCycle} alt="" />
        </a>
      </nav>
      <p className="sidebar__copyright">Copiryght, SportSee 2020</p>
    </div>
  )
}
