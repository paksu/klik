import _ from 'lodash';


export default function(state, action) {
  switch (action.type) {
    case "PROCESS_TICK":
      return {
        ...state,
      }

    case "ADD_UPGRADE":
      const money = state.money - action.upgrade.cost;
      if(money <= 0) {
        return state;
      }

      return {
        ...state,
        money,
        builtUpgrades: _.union(state.builtUpgrades, [action.upgrade.id])
      }

    default:
      return state
  }
}
