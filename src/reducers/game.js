import { getIncome } from '../core/helpers';
import { BUILDINGS } from '../core/buildings';

const initialState = {
  // Name of the company that the player gives in the splas screen
  companyName: undefined,
  // How much money does the player have
  money: 50,

  // Buildings (hired staff) that get upgraded as we go
  buildings: BUILDINGS,
  // List of buildings that the player sees
  visibleBuildings: ['SALES_GUY'],

  // List of upgrade ids that tha player has built
  builtUpgrades: [],

  // Achievements that the player has reached
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
