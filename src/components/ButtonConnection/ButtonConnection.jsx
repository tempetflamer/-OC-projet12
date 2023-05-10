import React from 'react'
import { Link } from 'react-router-dom'

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
