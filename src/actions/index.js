export const PROCESS_TICK = 'PROCESS_TICK';
export const ADD_BUILDING = 'ADD_BUILDING';
export const ADD_UPGRADE = 'ADD_UPGRADE';
export const CHEAT_MONEY = 'CHEAT_MONEY';

export function createTick() {
  return { type: PROCESS_TICK };
}

export function buyBuilding(building) {
  return { type: ADD_BUILDING, building }
}

export function buyUpgrade(upgrade) {
  return { type: ADD_UPGRADE, upgrade };
}

export function addMoney(amount) {
  return { type: CHEAT_MONEY, amount };
}
