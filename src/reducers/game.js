import { getIncome } from '../core/helpers';
import { BUILDINGS } from '../core/buildings';
import _ from 'lodash';

const initialBuildingData = BUILDINGS.reduce(function(byId, building) {
  byId[building.id] = _.pick(building, ['count', 'income', 'incomeFactor', 'initialCost', 'cost']);
  return byId
}, {});

const initialState = {
  // Name of the company that the player gives in the splas screen
  companyName: undefined,
  // How much money does the player have
  money: 50,
  // The maximum amount of money that the player has ever had
  maxMoney: 50,

  // Buildings (hired staff) that get upgraded as we go
  buildings: initialBuildingData,
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
