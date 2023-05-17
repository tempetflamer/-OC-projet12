import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * Render the connection button for user
 * @component
 * @name ButtonConnection
 * @param {string} className - classname given to button
 * @param {number} idUser - User ID
 * @param {object} children - Corresponds to the content inside ButtonConnection
 * @returns {JSX.Element} - Return the connection button with user N
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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
