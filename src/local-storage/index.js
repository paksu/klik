export const loadState = () => {
  try {
    const state = localStorage.getItem('state');
    if(state === null) {
      // No saved state found. Let reducers initialize initial state
      return undefined;
    }
    return JSON.parse(state);
  } catch (e) {
    // Something happened and we can't load the state
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Something went wrong, what should happen here?
  }
}

export const clearState = () => {
  try {
    localStorage.setItem('state', undefined);
  } catch (err) {
    // Something went wrong, what should happen here?
  }
}
