import reduceReducers from 'reduce-reducers';
import achievements from './achievements';
import buildings from './buildings';
import game from './game';
import upgrades from './upgrades';
import stats from './stats';

export default reduceReducers(
  game,
  buildings,
  upgrades,
  achievements,
  stats,
)
