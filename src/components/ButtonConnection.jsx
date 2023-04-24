import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonConnection({ className, idUser, children }) {
  return (
    <Link to={`/dashboard/${idUser}`}>
      <button className={className} data-id={idUser}>
        {children}
      </button>
    </Link>
  )
}
