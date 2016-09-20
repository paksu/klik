import _ from 'lodash';

function getVisibleBuildings(buildings, money) {
  return _.values(buildings).filter(b => money >= b.visibleAfter).map(b => b.id);
}

function getNextCost(initialCost, currentCount, n=1) {
  // Get cost of next n buildings
  return Math.ceil(initialCost * Math.pow(currentCount + 1, 2))
}

function building(state, action) {
  switch (action.type) {
    case "ADD_BUILDING":
      return {
        ...state,
        count: state.count + 1,
        cost: getNextCost(state.initialCost, state.count)
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
          },
          visibleBuildings: _.union(state.visibleBuildings, getVisibleBuildings(state.buildings, state.money))
        }
      }

    case "PROCESS_TICK":
      return {
        ...state,
        visibleBuildings: _.union(state.visibleBuildings, getVisibleBuildings(state.buildings, state.money))
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
