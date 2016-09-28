import { BUILDINGS } from '../core/buildings';
import { getIncome } from '../core/helpers';

const initialState = {
  companyName: undefined,
  money: 50,

  buildings: BUILDINGS,
  visibleBuildings: ['SALES_GUY'],

  visibleUpgrades: [],
  builtUpgrades: [],

  achievements: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_COMPANYNAME":
      return {
        ...state,
        companyName: action.name
      }

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
