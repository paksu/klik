import React, { Component } from 'react';
import { connect } from 'react-redux'
import LogItem from '../components/LogItem'

const logStyle = {
  background: '#333',
  height: '400px'
}

class GameLogContainer extends Component {
  render() {
    return (
      <div style={logStyle} className="col-md-2">
      {this.props.log.map(function(logMessage) {
        return <LogItem key={logMessage.id} logMessage={logMessage.text}/>;
      })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    log: state.log
  }
}

export default connect(
  mapStateToProps
)(GameLogContainer)
