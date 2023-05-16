import React from 'react'
import PropTypes from 'prop-types'
import './UserKeyData.scss'

/**
 * display icon with user infos
 * @component
 * @name UserKeyData
 * @param {string} userInfo - Give the quantity
 * @param {string} unite - Give the quantity unite
 * @param {string} abbUnite - Give the abbreviation of the quantity unite
 * @param {string} color - Gives the color of the div container
 * @param {string} icon - Give path de the icon picture
 * @returns {JSX.Element} - Return user's keyData
 */
export default function UserKeyData({ userInfo, unite, abbUnite, color, icon }) {
  return (
    <article className="user-perf">
      <div className={'user-perf__container' + ' color--' + color}>
        <img src={icon} alt="" className="user-perf__container__img" />
      </div>
      <div className="user-perf__data">
        <p className="user-perf__data__quantity">{userInfo + abbUnite}</p>
        <p className="user-perf__data__unit">{unite}</p>
      </div>
    </article>
  )
}

UserKeyData.propTypes = {
  userInfo: PropTypes.number,
  unite: PropTypes.string,
  abbUnite: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
}
