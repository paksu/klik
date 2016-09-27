import React, { Component } from 'react';
import { connect } from 'react-redux';
import Achievement from '../components/Achievement';
import { ACHIEVEMENTS } from '../core/achievements';
import _ from 'lodash';

class AchievementGallery extends Component {
  render() {
    return (
      <div>
        <h2>Achievements</h2>
        {this.props.achievements.map((achievement) => {
          return <Achievement
            key={achievement.id}
            achievement={achievement}
          />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    achievements: _.unionBy(state.achievements, ACHIEVEMENTS.map(a => a.achievement), 'id')
  }
}

export default connect(
  mapStateToProps,
)(AchievementGallery)
