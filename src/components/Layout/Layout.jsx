import PropTypes from 'prop-types'
import './Layout.scss'

/**
 * Layout used to wrap the main part of the application
 * @component
 * @name Layout
 * @param {string} className - classname given to the layout
 * @param {object} children - Corresponds to the content inside the layout
 * @returns {JSX.Element} - Return the layout
 */
export default function Layout({ children, className }) {
  return <div className={className}>{children}</div>
}

Layout.propTypes = {
  className: PropTypes.string,
}
