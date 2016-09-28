import _ from 'lodash';


export default function(state, action) {
  switch (action.type) {
    case "PROCESS_TICK":
      return {
        ...state,
      }

    case "ADD_UPGRADE":
      return {
        ...state,
        builtUpgrades: _.union(state.builtUpgrades, [action.upgrade.id])
      }

    default:
      return state
  }
}
