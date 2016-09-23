import { getIncome } from '../selectors';
import _ from 'lodash';

export const ACHIEVEMENTS = [{
//
// MONEY
//
  conditionFn: (state) => state.money > 1000,
  achievement: {
    id: "MONEY_1",
    name: "Ca$h money",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "Reached $1000 money"
  }
},{
  conditionFn: (state) => state.money > 11000,
  achievement: {
    id: "MONEY_2",
    name: "Ca$h money 2",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "Reached $10000 money"
  }
},


//
// INCOME
//
{
  conditionFn: (state) => getIncome(state) >= 100,
  achievement: {
    id: "INCOME_1",
    name: "Business is booming",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "Reached $100 income"
  }
},{
  conditionFn: (state) => getIncome(state) >= 1000,
  achievement: {
    id: "INCOME_2",
    name: "Business is booming 2",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "Reached $1000 income"
  }
},{
  conditionFn: (state) => getIncome(state) >= 10000,
  achievement: {
    id: "INCOME_3",
    name: "Business is booming 3",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "Reached $10000 income"
  }
},{
  conditionFn: (state) => getIncome(state) >= 100000,
  achievement: {
    id: "INCOME_4",
    name: "Business is booming 4",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "Reached $100000 income"
  }
},


//
// ALL BUILDINGS
//
{
  conditionFn: (state) => {
    const buildingCount = _.values(state.buildings).reduce((sum, b) => b.count + sum, 0);
    return buildingCount >= 10
  },
  achievement: {
    id: "BUILDINGS_1",
    name: "Hiring spree",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "Hired 10 people"
  }
},{
  conditionFn: (state) => {
    const buildingCount = _.values(state.buildings).reduce((sum, b) => b.count + sum, 0);
    return buildingCount >= 100
  },
  achievement: {
    id: "BUILDINGS_2",
    name: "Hiring spree 2",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "Hired 100 people"
  }
},{
  conditionFn: (state) => {
    const buildingCount = _.values(state.buildings).reduce((sum, b) => b.count + sum, 0);
    return buildingCount >= 1000
  },
  achievement: {
    id: "BUILDINGS_3",
    name: "Hiring spree 3",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "Hired 1000 people"
  }
},{
  conditionFn: (state) => {
    const buildingCount = _.values(state.buildings).reduce((sum, b) => b.count + sum, 0);
    return buildingCount >= 10000
  },
  achievement: {
    id: "BUILDINGS_4",
    name: "Hiring spree 4",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "Hired 1000 people"
  }
},


//
// INDIVIDUAL BUILDINGS
//

{
  conditionFn: (state) => state.buildings.SALES_GUY.count > 25,
  achievement: {
    id: "SALES_1",
    name: "Sales team",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "Hired 25 sales guys"
  }
},{
  conditionFn: (state) => state.buildings.SALES_GUY.count > 100,
  achievement: {
    id: "SALES_2",
    name: "Sales division",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "Hired 100 sales guys guy"
  }
},{
  conditionFn: (state) => state.buildings.SALES_GUY.count > 1000,
  achievement: {
    id: "SALES_3",
    name: "Too much sales",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "Hired 1000 sales guy"
  }
}]
