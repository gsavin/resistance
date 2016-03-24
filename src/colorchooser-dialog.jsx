import React from "react";
import ReactDOM from 'react-dom';
import { colors } from "./colors.js";
import { setBandValue } from "./store.js";

export default class ColorchooserDialog extends React.Component {
  setValue(v) {
    setBandValue(this.props.band, v);
  }
  
  render() {
    let buttons = [];
    this.props.colors.forEach((color, i) => {
      buttons.push(<button key={ i } type="button" className="btn" style={{ backgroundColor: color }} onClick={ this.setValue.bind(this, i) } data-dismiss="modal">&nbsp;</button>);
    });
    
    return <div className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog model-sm" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" id="myModalLabel">Choose band color</h4>
                </div>
                <div className="modal-body">{ buttons }</div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
  }
}
