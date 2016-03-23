window.jQuery = window.$ =  require('jquery');
require('bootstrap-webpack');
require('./stylesheet.scss')

import { store } from "./store.js";

import React from 'react';
import ReactDOM from 'react-dom';
import Resistance from './resistance.jsx';

const render = () => {
  ReactDOM.render(
    <Resistance
      value={ store.getState() }
    />,
    
    document.getElementById("resistance")
  );
};

store.subscribe(render);
render();
