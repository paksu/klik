import React, { PropTypes } from 'react'

const logStyle = {
  color: '#FCD734'
};

const LogItem = ({logMessage}) => (

  <div style={logStyle}>{logMessage}</div>
)

LogItem.propTypes = {
  logMessage: PropTypes.string.isRequired
}

export default LogItem
