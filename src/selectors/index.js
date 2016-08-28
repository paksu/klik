import { createSelector } from 'reselect';
import _ from 'lodash';

const getBuildings = (state) => state.buildings;
const getUpgrades = (state) => state.upgrades;
const getVisibleUpgrades = (state) => state.visibleUpgrades;
const getBuiltUpgrades = (state) => state.builtUpgrades;

export const getIncome = createSelector(
  [ getBuildings ],
  (buildings) => {
    return _.values(buildings).reduce(
      (income, building) => building.count * building.income * building.incomeFactor + income
    , 0);
  }
)

export const getUpgradesForSale = createSelector(
  [ getUpgrades, getVisibleUpgrades, getBuiltUpgrades ],
  (upgrades, visible, built) => {
    return visible.filter(id => ! _.includes(built, id)).map(id => upgrades[id])
  }
)
