import { BUILDINGS } from '../core/buildings';
import { UPGRADES } from '../core/upgrades';
import { getIncome } from '../selectors';

console.log(BUILDINGS)
const initialState = {
  money: 15,
  log: [],

  buildings: BUILDINGS,
  affordableBuildings: [],
  visibleBuildings: ['SALES_GUY'],

  upgrades: UPGRADES,
  affordableUpgrades: [],
  visibleUpgrades: [],
  builtUpgrades: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "PROCESS_TICK":
      const income = getIncome(state);
      return {
        ...state,
        money: state.money + income,
        log: [{ id: state.log.length, text: `Money +${income}` }, ...state.log]
      }
      case "CHEAT_MONEY":
        return {
          ...state,
          money: state.money + action.amount
        }
        case "CHEAT_RESTART":
          return initialState

    default:
      return state
  }
}
