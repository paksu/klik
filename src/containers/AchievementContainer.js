import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const ACHIEVEMENT_TTL = 5000;

class AchievementContainer extends Component {
  render() {
    return (
      <div style={{'position': 'absolute', 'top': '10px', 'right': '10px', zIndex: 10}}>
        {this.props.notifications.map((notification) => {
          return <div className="animated lightSpeedIn alert alert-success" role="alert" key={notification.addedAt}>
            <h4>Achievement unlocked!</h4>
            <b>{notification.name}</b>
            <div>{notification.description}</div>
          </div>
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
)(AchievementContainer)
