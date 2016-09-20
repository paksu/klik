import { BUILDINGS } from '../core/buildings';
import { UPGRADES } from '../core/upgrades';
import { getIncome } from '../selectors';

const initialState = {
  money: 15,

  buildings: BUILDINGS,
  visibleBuildings: ['SALES_GUY'],

  upgrades: UPGRADES,
  visibleUpgrades: [],
  builtUpgrades: [],

  achievements: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "PROCESS_TICK":
      const income = getIncome(state);
      return {
        ...state,
        money: state.money + income
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
