import _ from 'lodash';

function getAffordableUpgrades(upgrades, money) {
  return _.values(upgrades).filter(upgrade => money >= upgrade.cost).map(upgrade => upgrade.id);
}

function getVisibleUpgrades(upgrades, money) {
  return _.values(upgrades).filter(upgrade => money >= upgrade.visibleAfter).map(upgrade => upgrade.id);
}

export default function(state, action) {
  switch (action.type) {
    case "PROCESS_TICK":

      return {
        ...state,
        affordableUpgrades: getAffordableUpgrades(state.upgrades, state.money),
        visibleUpgrades: _.union(state.visibleUpgrades, getVisibleUpgrades(state.upgrades, state.money))
      }

    case "ADD_UPGRADE":
      if(state.money <= action.upgrade.cost) {
        return state;
      }

      const builtUpgrades = _.union(state.builtUpgrades, [action.upgrade.id]);
      return {
        ...state,
        visibleUpgrades: _.without(builtUpgrades, action.upgrade.id),
        builtUpgrades
      }

    default:
      return state
  }
}
