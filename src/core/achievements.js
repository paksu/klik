import { getIncome } from '../core/helpers';
import _ from 'lodash';


export const validate = (state, achievement) => {
  // Do a nested lookup into state
  // http://stackoverflow.com/questions/8051975/access-object-child-properties-using-a-dot-notation-string
  const value = achievement.statePath.split('.').reduce((a, b) => a[b], state);
  if(value && value > achievement.threshold) {
      return true;
  };
  return false;
}

export const ACHIEVEMENTS = [{
  id: "money-achivement-1",
  name: "Ca$h money",
  icon: "game-icon-yellow game-icon game-icon-orb-wand game-icon-4x",
  description: "Reach $1000 money",
  statePath: "money",
  threshold: 1000
}, {
  id: "money-achivement-2",
  name: "Ca$h money 2",
  icon: "game-icon-yellow game-icon game-icon-orb-wand game-icon-4x",
  description: "Reach $10000 money",
  statePath: "money",
  threshold: 10000
}, {
  id: "money-achivement-3",
  name: "Ca$h money 3",
  icon: "game-icon-red game-icon game-icon-orb-wand game-icon-4x",
  description: "Reach $100000 money",
  statePath: "money",
  threshold: 100000
}, {
  id: "money-achivement-4",
  name: "Ca$h money 4",
  icon: "game-icon-purple game-icon game-icon-orb-wand game-icon-4x",
  description: "Reach $10000000 money",
  statePath: "money",
  threshold: 10000000
}, {
  id: "income-achivement-1",
  name: "Business is booming 1",
  icon: "game-icon-blue game-icon game-icon-meditation game-icon-4x",
  description: "Reach $100 income",
  statePath: "moneyIncome",
  threshold: 100
}, {
  id: "income-achivement-2",
  name: "Business is booming 2",
  icon: "game-icon-yellow game-icon game-icon-meditation game-icon-4x",
  description: "Reach $1000 income",
  statePath: "moneyIncome",
  threshold: 1000
}, {
  id: "income-achivement-3",
  name: "Business is booming 3",
  icon: "game-icon-red game-icon game-icon-meditation game-icon-4x",
  description: "Reach $10000 income",
  statePath: "moneyIncome",
  threshold: 10000
}, {
  id: "income-achivement-4",
  name: "Business is booming 4",
  icon: "game-icon-purple game-icon game-icon-meditation game-icon-4x",
  description: "Reach $100000 income",
  statePath: "moneyIncome",
  threshold: 100000
}, {
  id: "staff-achievement-1",
  name: "Hiring spree 1",
  icon: "game-icon-blue game-icon game-icon-wrapping-star game-icon-4x",
  description: "Hired 10 people",
  statePath: "staffCount",
  threshold: 10
}, {
  id: "staff-achievement-2",
  name: "Hiring spree 2",
  icon: "game-icon-yellow game-icon game-icon-wrapping-star game-icon-4x",
  description: "Hired 100 people",
  statePath: "staffCount",
  threshold: 100
}, {
  id: "staff-achievement-3",
  name: "Hiring spree 3",
  icon: "game-icon-red game-icon game-icon-wrapping-star game-icon-4x",
  description: "Hired 1000 people",
  statePath: "staffCount",
  threshold: 1000
}, {
  id: "staff-achievement-4",
  name: "Hiring spree 4",
  icon: "game-icon-purple game-icon game-icon-wrapping-star game-icon-4x",
  description: "Hired 1000 people",
  statePath: "staffCount",
  threshold: 10000
}, {
  id: "sales-guy-achievement-1",
  name: "Sales team",
  icon: "game-icon-blue game-icon game-icon-fire-bomb game-icon-4x",
  description: "Hired 25 sales guys",
  statePath: "buildings.SALES_GUY.count",
  threshold: 25
}, {
  id: "sales-guy-achievement-2",
  name: "Sales division",
  icon: "game-icon-yellow game-icon game-icon-fire-bomb game-icon-4x",
  description: "Hired 100 sales guys guy",
  statePath: "buildings.SALES_GUY.count",
  threshold: 100
}, {
  id: "sales-guy-achievement-3",
  name: "Too much sales",
  icon: "game-icon-red game-icon game-icon-fire-bomb game-icon-4x",
  description: "Hired 1000 sales guy",
  statePath: "buildings.SALES_GUY.count",
  threshold: 1000
}];
