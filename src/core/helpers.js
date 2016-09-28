import _ from 'lodash';

export const getIncome = (state) =>  {
  // Calculates income from all buildings for a single tick
  return _.values(state.buildings).reduce((income, b) => b.count * b.income * b.incomeFactor + income, 0);
}
