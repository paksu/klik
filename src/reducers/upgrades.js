import _ from 'lodash';

function getVisibleUpgrades(upgrades, money) {
  return _.values(upgrades).filter(upgrade => money >= upgrade.visibleAfter).map(upgrade => upgrade.id);
}

export default function(state, action) {
  switch (action.type) {
    case "PROCESS_TICK":
      return {
        ...state,
        visibleUpgrades: _.union(state.visibleUpgrades, getVisibleUpgrades(state.upgrades, state.money))
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
