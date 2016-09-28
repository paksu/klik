import { getIncome } from '../core/helpers';
import { BUILDINGS } from '../core/buildings';

const initialState = {
  // Name of the company that the player gives in the splas screen
  companyName: undefined,
  // How much money does the player have
  money: 50,
  // The maximum amount of money that the player has ever had
  maxMoney: 50,

  // Buildings (hired staff) that get upgraded as we go
  buildings: BUILDINGS,
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
        money: state.money + income,
        maxMoney: Math.max(state.maxMoney, state.money + income)
      }

    case "ALTER_MONEY":
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
