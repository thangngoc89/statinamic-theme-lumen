import React, { PropTypes } from "react"
import Link from "statinamic/lib/Link"
import styles from "./styles.css"

const GoHomeButton = ({ text }) => ((
  <Link to="/" className={ styles.button }>{ text }</Link>
))

GoHomeButton.propTypes = {
  text: PropTypes.string.isRequired,
}

export default GoHomeButton
