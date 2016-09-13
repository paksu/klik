import reduceReducers from 'reduce-reducers';
import buildings from './buildings';
import upgrades from './upgrades';
import game from './game';
import achievements from './achievements';

export default reduceReducers(
  game,
  buildings,
  upgrades,
  achievements,
)
