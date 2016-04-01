import React, { PropTypes } from "react"
import moment from "moment"

const Time = ({ time, format, ...props }) => ((
  <time dateTime={ moment(time).format("MMMM D, YYYY") } { ...props }>
    { moment(time).format(format) }
  </time>
))

Time.propTypes = {
  time: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
}

export default Time
