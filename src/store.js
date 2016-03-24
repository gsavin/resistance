import { createStore } from 'redux';

const getDisplayValue = (v) => {
  let suffix = "";
  
  if (v >= 1000000) {
    v /= 1000000;
    suffix = "M" + suffix;
  }
  else if (v >= 1000) {
    v /= 1000;
    suffix = "k" + suffix;
  }
  
  return v + suffix;
};

const getBands = (v, bandCount = 4, bands = [0, 0, 0, 0, 2]) => {
  let r = /(\d*[1-9])(0*)$/;
  let a = r.exec("" + v);
  
  if (a == null) {
    return bands;
  }
  
  if (a[1].length > 2) {
    a[2] += "0".repeat(a[1].length - 2);
    a[1] = a[1].substring(0, 2);
  }
  
  v = a[1];
  bands[3] = a[2].length;
  
  while (v.length < bandCount - 2 && bands[3] > 0) {
    v = v + "0";
    bands[3]--;
  }
  
  v = "0".repeat(bandCount - 2 - v.length) + v;
  
  bands[0] = parseInt(v[0]);
  bands[1] = parseInt(v[1]);
  
  if (bandCount == 5) {
    bands[2] = parseInt(v[2]);
  }
  
  return bands;
};

const getValueFromBands = (bands, bandCount) => {
  let v = bands[0] * 10 + bands[1];
  
  if (bandCount == 5) {
    v = v * 10 + bands[2];
  }
  
  v *= Math.pow(10, bands[3]);
  
  return v;
};

const defaultValue = 1000;
const defaultBandCount = 4;

const defaultState = {
  bandCount: defaultBandCount,
  bands: getBands(defaultValue, defaultBandCount),
  value: defaultValue,
  displayValue: getDisplayValue(defaultValue)
};

const resistor = (state = defaultState, action) => {
  switch (action.type) {
  case "SET_BAND_COUNT":
    if (state.value > 99000000000 && action.bandCount == 4) {
      console.log("Value too high to switch to 4-bands resistor.");
      return state;
    }
    
    return {
      bandCount: action.bandCount,
      bands: getBands(state.value, action.bandCount, state.bands),
      value: state.value,
      displayValue: state.displayValue
    };
  case "SET_TOLERANCE":
    return {
      bandCount: state.bandCount,
      bands: [state.bands[0], state.bands[1], state.bands[2], state.bands[3], action.tolerance],
      value: state.value,
      displayValue: state.displayValue
    };
  case "SET_BAND_VALUE":
    let bands = [state.bands[0], state.bands[1], state.bands[2], state.bands[3], state.bands[4]];
    bands[action.band] = action.value;
    let value = getValueFromBands(bands, state.bandCount);
    
    return {
      bandCount: state.bandCount,
      bands: bands,
      value: value,
      displayValue: getDisplayValue(value)
    };
  case "VALUE_CHANGED":
    let r = /^(\d+(?:\.\d+)?)(K|k|M)?$/;
    let a = r.exec(action.value);
    
    if (a == null) {
      return {
        bandCount: state.bandCount,
        bands: state.bands,
        value: state.value,
        displayValue: action.value
      };
    }
    
    switch (a[2]) {
    case "K":
    case "k":
      a[1] *= 1000;
      break;
    case "M":
      a[1] *= 1000000;
      break;
    default:
      // ...
    }
    
    let bandCount = state.bandCount;
    
    a[1] = Math.min(999000000000, a[1]);
    console.log("Value set to", parseFloat(a[1]));
    
    if (a[1] > 99000000000 && bandCount == 4) {
      console.log("Value too high for a 4-bands resistor. Switching to 5-bands version...");
      bandCount = 5;
    }
    
    return {
      bandCount: bandCount,
      bands: getBands(parseInt(a[1]), state.bandCount, state.bands),
      value: parseInt(a[1]),
      displayValue: action.value
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

export const setTolerance = (tolerance) => {
  store.dispatch({
    type: "SET_TOLERANCE",
    tolerance: tolerance
  });
};

export const setBandValue = (band, value) => {
  store.dispatch({
    type: "SET_BAND_VALUE",
    band: band,
    value: value
  });
};
