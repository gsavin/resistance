import { createStore } from 'redux';

const resistor = (state = {bandCount: 4, bands: [0, 0, 0, 0, 0], value: 1000}, action) => {
  switch (action.type) {
  case "SET_BAND_COUNT":
    return {
      bandCount: action.bandCount,
      bands: state.bands
    };
  default:
    // ...
  }
  
  return state;
};

export const store = createStore(resistor);

export const setBandCount = (bandCount) => {
  store.dispatch({
    type: "SET_BAND_COUNT",
    bandCount: bandCount
  });
};
