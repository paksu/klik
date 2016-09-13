import * as core from '../core';
import { getIncome } from '../selectors';

const initialState = {
  money: 15,
  log: [],

  buildings: core.BUILDINGS,
  affordableBuildings: [],
  visibleBuildings: ['SALES_GUY'],

  upgrades: core.UPGRADES,
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
