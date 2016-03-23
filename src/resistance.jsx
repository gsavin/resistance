import React from 'react';
import { setBandCount } from "./store.js";

export default class Resistance extends React.Component {
  get value() {
    // &#8486;
    let suffix = "Ω";
    let v = this.props.value.value;
    
    if (v >= 1000000) {
      v /= 1000000;
      suffix = "M" + suffix;
    }
    else if (v >= 1000) {
      v /= 1000;
      suffix = "k" + suffix;
    }
    
    return v + suffix;
  }
  
  render() {
    return <div class="resistance">
        <input type="text" value={ this.value }/>
        <img src={ "img/resistor_" + this.props.value.bandCount + "_bands.svg" } width="auto" height="250px"/>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" onClick={setBandCount.bind(this, 4)}>4 bandes</button>
          <button type="button" class="btn btn-default" onClick={setBandCount.bind(this, 5)}>5 bandes</button>
        </div>
      </div>
  }
};
