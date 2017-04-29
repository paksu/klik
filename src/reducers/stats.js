export default function(state, action) {
  switch (action.type) {
    case "PROCESS_TICK":
      const staffCount = Object.values(state.buildings).reduce((staffCount, b) => b.count + staffCount, 0);
      return {
        ...state,
        stats: {
          ...state.stats,
          maxMoney: Math.max(state.stats.maxMoney, state.money),
          achievementCount: Math.max(state.stats.achievementCount, state.achievements.length),
          totalMoneyEarned: state.stats.totalMoneyEarned + state.moneyIncome,
          maxIncome: Math.max(state.stats.maxIncome, state.moneyIncome),
          maxStaff: Math.max(state.stats.maxStaff, staffCount),
          maxUpgrades: Math.max(state.stats.maxUpgrades, state.builtUpgrades.length),
        }
    }

    case "WORK_CLICK":
      return {
        ...state,
        stats: {
          ...state.stats,
          timesClicked: state.stats.timesClicked + 1
        }
    }

    case "ALTER_MONEY":
      return {
      ...state,
      stats: {
        ...state.stats,
        totalMoneySpent: state.stats.totalMoneyEarned + (action.amount > 0 ? action.amount : 0)
      }
    }

    default:
      return state
  }
}
