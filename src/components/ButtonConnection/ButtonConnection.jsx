import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * Render the connection button with user
 * @param {string} className
 * @param {number} className
 * @param {content} className
 * @return {JSX}
 */
export default function ButtonConnection({ className, idUser, children }) {
  return (
    <Link to={`/dashboard/${idUser}`}>
      <button className={className} data-id={idUser}>
        {children}
      </button>
    </Link>
  )
}

ButtonConnection.propTypes = {
  className: PropTypes.string,
  idUser: PropTypes.number,
}
