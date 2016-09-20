import { ACHIEVEMENTS } from '../core/achievements';
import _ from 'lodash';

export default function(state, action) {
  const newAchievements = ACHIEVEMENTS.filter(a => a.conditionFn(state)).map(a => a.achievement);

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
