import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import './Layout.scss'

export default function Layout({ children, className }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <div className={className}>{children}</div>
}
