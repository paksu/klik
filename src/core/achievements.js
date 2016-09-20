export const ACHIEVEMENTS = [{
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
},{
  conditionFn: (state) => state.buildings.SALES_GUY.count > 0,
  achievement: {
    id: "HIRE_1",
    name: "First hire",
    icon: "game-icon-green game-icon game-icon-meditation game-icon-4x",
    description: "Hired sales guy"
  }
}]
