export const PROCESS_TICK = 'PROCESS_TICK';
export const ADD_BUILDING = 'ADD_BUILDING';
export const ALTER_MONEY = 'ALTER_MONEY';
export const ADD_UPGRADE = 'ADD_UPGRADE';
export const SET_COMPANYNAME = 'SET_COMPANYNAME';
export const CHEAT_RESTART = 'CHEAT_RESTART';
export const WORK_CLICK  = 'WORK_CLICK';

export function setCompanyName(name) {
  return { type: SET_COMPANYNAME, name };
}
export function createTick(innovationAmount = 0, swaggerAmount = 0) {
  return { type: PROCESS_TICK, innovationAmount, swaggerAmount};
}

export function createClick() {
  return { type: WORK_CLICK };
}

export function buyBuilding(building) {
  return { type: ADD_BUILDING, building }
}

export function alterMoney(amount) {
  return { type: ALTER_MONEY, amount }
}

export function buyUpgrade(upgrade) {
  return { type: ADD_UPGRADE, upgrade };
}

export function restart() {
  return { type: CHEAT_RESTART };
}
