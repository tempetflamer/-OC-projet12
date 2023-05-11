import PropTypes from 'prop-types'
import './Layout.scss'

/**
 * Layout used to wrap the main part of the application
 */
export default function Layout({ children, className }) {
  return <div className={className}>{children}</div>
}

Layout.propTypes = {
  className: PropTypes.string,
}
