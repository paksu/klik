import _ from 'lodash';
import { getNextCostN } from '../core/buildings';

function building(state, action) {
  switch (action.type) {
    case "ADD_BUILDING":
      const newCount = state.count + 1;
      return {
        ...state,
        count: newCount,
        cost: getNextCostN(state.initialCost, newCount),
      }

    case "ADD_UPGRADE":
      return {
        ...state,
        incomeFactor: action.upgrade.factor + state.incomeFactor
      }

    default:
      return state
  }
}

export default function(state, action) {
  switch (action.type) {

    case "ADD_BUILDING":
      const money = state.money - action.building.cost;
      if(money <= 0) {
        return state
      } else {
        return {
          ...state,
          money,
          buildings: {
            ...state.buildings,
            [action.building.id]: building(state.buildings[action.building.id], action)
          }
        }
      }

    case "PROCESS_TICK":
      return {
        ...state,
      }

    case "ADD_UPGRADE":
      return {
        ...state,
        buildings: {
          ...state.buildings,
          [action.upgrade.buildingId]: building(state.buildings[action.upgrade.buildingId], action)
        }
      }

    default:
      return state
  }
}
