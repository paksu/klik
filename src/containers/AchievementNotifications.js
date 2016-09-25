import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notification from '../components/Notification'

const ACHIEVEMENT_TTL = 5000;

class AchievementNotifications extends Component {
  render() {
    return (
      <div style={{'position': 'absolute', 'top': '60px', 'right': '10px', zIndex: 10000}}>
        {this.props.notifications.map((notification) => {
          return <Notification key={notification.addedAt} notification={notification} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // Get notifications that have not yet expired
  return {
    notifications: state.achievements.filter(a => new Date().getTime() - a.addedAt < ACHIEVEMENT_TTL)
  }
}

export default connect(
  mapStateToProps,
)(AchievementNotifications)
