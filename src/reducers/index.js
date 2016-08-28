import reduceReducers from 'reduce-reducers';
import buildings from './buildings';
import upgrades from './upgrades';
import game from './game';

export default reduceReducers(
  game,
  buildings,
  upgrades
)
