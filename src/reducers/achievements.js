import { ACHIEVEMENTS, validate } from '../core/achievements';
import _ from 'lodash';

export default function(state, action) {
  const newAchievements = ACHIEVEMENTS.filter(a => validate(state, a));

  const addedAchievements =
    _.differenceBy(newAchievements, state.achievements, 'id')
    .map(achievement => {
      return {
        ...achievement,
        addedAt: new Date().getTime()
      }
    });

  return {
    ...state,
    achievements: _.union(state.achievements, addedAchievements)
  }
}
