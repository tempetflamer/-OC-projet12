import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Layout.scss'

/**
 * Layout used to wrap the main part of the application and to apply a scrollTo effect on each page
 * @param {content} children
 * @param {string} className
 * @returns {JSX}
 */
export default function Layout({ children, className }) {
  console.log('layout', typeof children, typeof className)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <div className={className}>{children}</div>
}

Layout.propTypes = {
  className: PropTypes.string,
}
