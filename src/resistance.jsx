import React from 'react';
import { store, setBandCount, setTolerance } from "./store.js";

const colors = ["#000000", "#8a3d06", "#c40808", "#f86623", "#e5d317", "#36b71a", "#1a53b7", "#9a1ab7", "#767676", "#fafafa"];
const toleranceColors = ["#8a3d06", "#c40808", "#ad9f4e", "#969696"];

class Resistance4 extends React.Component {
  render() {
    return <svg
       id="svg4203"
       viewBox="0 0 34.12999 10.00328"
       height="250"
       width="850"
       y="0in"
       x="0in"
       version="1.2">
      <metadata
         id="metadata4233">
      </metadata>
      <defs
         id="defs4231" />
      <g
         id="g5058">
        <rect
           y="3.9918401"
           x="1.9748962"
           height="0.72000003"
           id="connector0pin"
           width="0.72000003"
           style={{ fill:"none" }} />
        <rect
           y="3.9918401"
           x="31.435095"
           height="0.72000003"
           id="connector1pin"
           width="0.72000003"
           style={{ fill:"none" }} />
        <line
           y2="5.0394402"
           x2="3.7100964"
           id="connector0leg"
           y1="5.0394402"
           x1="2.6624961"
           style={{ fill:"none", stroke:"#8c8c8c", "strokeWidth":2.09520006, "strokeLinecap":"round" }} />
        <line
           y2="5.0394402"
           x2="30.419897"
           id="connector1leg"
           y1="5.0394402"
           x1="31.467495"
           style={{ fill:"none", stroke:"#8c8c8c", "strokeWidth":2.09520006, "strokeLinecap":"round" }} />
        <path
           d="m 2.6624961,5.0394401 28.3666009,0"
           id="path4216"
           style={{ fill:"none", stroke:"#8c8c8c", "strokeWidth":2.09520006 }} />
      </g>
      <g
         transform="translate(1.6148963,1.4070402)"
         id="g4209"
         partID="57410">
        <g
           id="breadboard">
          <path
             style={{ fill:"#d9b477" }}
             id="body"
             d="M 10.2478,0.49536 C 9.8878,0.32976 9.2686,0.20016 8.8726,0.20016 l -1.9872,0 c -0.396,0 -0.72,0.324 -0.72,0.72 l 0,5.35608 c 0,0.39672 0.324,0.72 0.72,0.72 l 1.9872,0 c 0.396,0 1.0152,-0.13608 1.3752,-0.2952 l 0.072,-0.03528 c 0.36,-0.1656 0.9792,-0.2952 1.3752,-0.2952 l 7.1856,0 c 0.39672,0 1.01448,0.13608 1.37448,0.2952 l 0.07272,0.03528 c 0.36,0.1656 0.97776,0.2952 1.3752,0.2952 l 1.9872,0 c 0.39744,0 0.72,-0.32328 0.72,-0.72 l 0,-5.35608 c 0,-0.396 -0.32256,-0.72 -0.72,-0.72 l -1.9872,0 c -0.39744,0 -1.0152,0.1368 -1.3752,0.2952 l -0.07272,0.036 c -0.36,0.1656 -0.97776,0.2952 -1.37448,0.2952 l -7.1856,0 c -0.396,0 -1.0152,-0.1368 -1.3752,-0.2952 l -0.072,-0.036 z" />
          <rect
             style={{ fill: toleranceColors[this.props.bands[4]] }}
             width="0.70271999"
             id="band_5"
             height="6.7953601"
             x="22.018999"
             y="0.19368" />
          <rect
             style={{ fill:colors[this.props.bands[3]], fillOpacity:1 }}
             width="1.8504"
             id="band_4"
             height="5.5367999"
             x="16.1726"
             y="0.82656002" />
          <rect
             style={{ fill:colors[this.props.bands[1]] }}
             width="1.8504"
             id="band_2"
             height="5.5367999"
             x="12.4726"
             y="0.82656002" />
          <path
             style={{ fill:colors[this.props.bands[0]] }}
             id="band_1"
             d="m 10.6286,0.63936 c -0.1152,-0.036 -0.2232,-0.072 -0.3096,-0.1152 l -0.072,-0.036 C 9.887,0.32328 9.2678,0.19296 8.8718,0.19296 l -0.0864,0 0,6.79608 0.0864,0 c 0.396,0 1.0152,-0.13608 1.3752,-0.2952 l 0.072,-0.03528 c 0.0864,-0.04464 0.1944,-0.07992 0.3096,-0.1152 l 0,-5.904 z" />
          <path
             style={{ opacity:0.3 }}
             id="Shadow"
             d="m 23.711,4.0896 0,0 c 0,0.37944 -0.13032,0.69912 -0.2952,0.69912 l -1.9224,0 c -0.38016,0 -0.97776,-0.05616 -1.33272,-0.1224 L 20.088,4.65048 c -0.34488,-0.0648 -0.94896,-0.1224 -1.33344,-0.1224 l -6.94656,0 c -0.3816,0 -0.9792,0.0576 -1.332,0.1224 L 10.404,4.6656 C 10.0584,4.73112 9.4608,4.788 9.072,4.788 l -0.3168,0 -1.0008,0 -0.3096,0 c -0.3816,0 -0.6984,0.29376 -0.6984,0.64512 l 0,0.24696 0,0.15912 0,0.1728 c 0,0.36 0.3168,0.64512 0.6984,0.64512 l 1.62,0 c 0.3816,0 0.9792,-0.1224 1.332,-0.26712 l 0.072,-0.02808 c 0.3456,-0.14112 0.9504,-0.26496 1.332,-0.26496 l 6.94656,0 c 0.37944,0 0.97704,0.12384 1.33416,0.26568 l 0.07416,0.02808 c 0.34488,0.14472 0.94464,0.26712 1.33344,0.26712 l 2.2248,0 c 0.38088,0 0.69912,-0.2952 0.69912,-0.64512 l -4e-5,-0.54072 0,-0.97272 0,-1.84392 c -0.2772,0.108 -0.702,0.4104 -0.702,1.43424 z" />
          <rect
             style={{ opacity:0.4 }}
             width="0.70271999"
             id="ShadowExtra"
             height="3.15288"
             x="22.018999"
             y="3.4833601" />
          <path
             style={{  opacity:0.25, fill:"#ffffff" }}
             id="ReflexRight"
             d="m 19.751,1.08576 c 0.22968,0 0.49104,-0.1008 0.6624,-0.1728 0.2016,-0.0792 0.57672,-0.144 0.96624,-0.144 l 1.46088,0 c 0.22464,0 0.22464,0.2448 0.22464,0.3744 0,0.1296 -0.01512,0.3816 -0.22464,0.3816 l -3.06,0 c -0.10728,0 -0.2304,-0.1152 -0.2304,-0.22392 C 19.5566,1.21536 19.6286,1.08576 19.751,1.08576 Z" />
          <circle
             style={{  opacity:0.35, fill:"#ffffff" }}
             r="0.43200001"
             id="ReflexLeft"
             cy="1.13616"
             cx="6.9998398" />
          <rect
             style={{ opacity:0.25, fill:"#ffffff" }}
             width="0.70271999"
             id="Reflex_gold"
             height="1.62"
             x="22.018999"
             y="0.42335999" />
          <rect
             style={{ opacity:0.5, fill:"#ffffff" }}
             width="0.70271999"
             id="Reflex_extra"
             height="0.74879998"
             x="22.018999"
             y="0.78336" />
        </g>
      </g>
    </svg>
  }
}

class Resistance5 extends React.Component {
  render() {
    return <svg
       id="svg4203"
       viewBox="0 0 34.12999 10.00328"
       height="250"
       width="850"
       y="0in"
       x="0in"
       version="1.2">
      <metadata
         id="metadata4233">
      </metadata>
      <defs
         id="defs4231" />
      <g
         id="g5058">
        <rect
           y="3.9918401"
           x="1.9748962"
           height="0.72000003"
           id="connector0pin"
           width="0.72000003"
           style={{ fill: "none" }} />
        <rect
           y="3.9918401"
           x="31.435095"
           height="0.72000003"
           id="connector1pin"
           width="0.72000003"
           style={{ fill: "none" }} />
        <line
           y2="5.0394402"
           x2="3.7100964"
           id="connector0leg"
           y1="5.0394402"
           x1="2.6624961"
           style={{ fill: "none", stroke: "#8c8c8c", strokeWidth:2.09520006, strokeLinecap:"round" }} />
        <line
           y2="5.0394402"
           x2="30.419897"
           id="connector1leg"
           y1="5.0394402"
           x1="31.467495"
           style={{ fill: "none", stroke: "#8c8c8c", strokeWidth:2.09520006, strokeLinecap:"round" }} />
        <path
           d="m 2.6624961,5.0394401 28.3666009,0"
           id="path4216"
           style={{ fill: "none", stroke: "#8c8c8c", strokeWidth:2.09520006 }} />
      </g>
      <g
         transform="translate(1.2077337,1.6001752)"
         id="g4311"
         partID="57520">
        <g
           id="g4313"
           transform="translate(3.6e-6,0)">
          <g
             id="breadboard-2">
            <path
               style={{ fill: "#7bc6b8" }}
               id="body-5"
               d="M 10.6549,0.301997 C 10.294904,0.135999 9.675909,0.007 9.27992,0.007 l -1.98697,-7e-8 c -0.395996,0 -0.719993,0.323996 -0.719993,0.719993 l 0,5.35593997 c 0,0.395996 0.323996,0.719993 0.719993,0.719993 l 1.98699,4.1e-6 c 0.395996,0 1.01499,-0.135999 1.37498,-0.295997 l 0.072,-0.035 C 11.086916,6.306935 11.705911,6.176936 12.1019,6.176936 l 7.18493,0 c 0.396996,0 1.01599,0.136999 1.37498,0.294997 l 0.072,0.035 c 0.360996,0.165998 0.978991,0.295997 1.37598,0.295997 l 1.98698,0 c 0.395996,0 0.719993,-0.322997 0.719993,-0.719993 L 24.8167,0.726991 c 0,-0.395996 -0.322997,-0.719993 -0.719993,-0.719993 l -1.98698,0 c -0.396996,0 -1.01499,0.136999 -1.37598,0.294997 l -0.072,0.0359996 c -0.358996,0.165998 -0.97799,0.294997 -1.37498,0.294997 l -7.18493,0 c -0.395996,0 -1.01499,-0.136999 -1.37498,-0.294997 L 10.6549,0.301997 Z" />
            <rect
               style={{ fill: toleranceColors[this.props.bands[4]]  }}
               height="6.7959299"
               id="band_5"
               x="22.4258"
               y="0"
               width="0.70299298" />
            <rect
               style={{ fill: colors[this.props.bands[2]]  }}
               height="5.5369401"
               id="band_3"
               x="15.1399"
               y="0.632994"
               width="1.85098" />
            <rect
               style={{ fill: colors[this.props.bands[1]]  }}
               height="5.5369401"
               id="band_2"
               x="12.1599"
               y="0.632994"
               width="1.84998" />
            <path
               style={{ fill: colors[this.props.bands[3]]  }}
               id="band_4"
               d="m 18.0038,0.635993 c 0,0 1.19699,0 1.39999,0 0.203,0 0.437995,-0.0629994 0.437995,-0.0629994 l 0,5.67194 c 0,0 -0.202998,-0.064999 -0.437995,-0.064999 -0.234997,0 -1.39999,-0.007 -1.39999,-0.007 l 0,-5.5369413 z" />
            <path
               style={{ fill: colors[this.props.bands[0]]  }}
               id="band_1"
               d="M 11.0359,0.445995 C 10.920901,0.4099954 10.812902,0.3739957 10.725903,0.330996 l -0.072,-0.0359996 C 10.2949,0.129999 9.67594,0 9.27994,0 l -0.08705,0 0,6.79593 0.08705,0 c 0.395996,0 1.01499,-0.136999 1.37498,-0.294997 l 0.072,-0.036 c 0.086,-0.044 0.194998,-0.078999 0.309997,-0.114999 L 11.0369,0.445995 Z" />
            <path
               style={{ fill: "#000000", fillOpacity:0.4 }}
               id="Shadow-0"
               d="m 24.1188,3.89596 0,0 c 0,0.379997 -0.129999,0.698993 -0.294997,0.698993 l -1.92298,0 c -0.379997,0 -0.97799,-0.055999 -1.33199,-0.121999 l -0.073,-0.016 C 20.150836,4.391955 19.547845,4.334955 19.162843,4.334955 l -6.94693,0 c -0.381996,0 -0.978991,0.056999 -1.33199,0.121999 l -0.072,0.015 C 10.466927,4.5379534 9.8689333,4.594953 9.4799343,4.594953 l -0.3169943,-3e-6 -1.00102,0 -0.309997,0 c -0.381996,0 -0.697993,0.292997 -0.697993,0.644993 l 0,0.246997 0,0.158998 0,0.172998 c 0,0.359996 0.315996,0.645993 0.697993,0.645993 l 1.61999,0 c 0.380996,0 0.978991,-0.122999 1.33199,-0.267998 l 0.072,-0.027 c 0.345997,-0.141998 0.95099,-0.265998 1.33199,-0.265998 l 6.94593,0 c 0.379997,0 0.97799,0.123998 1.33399,0.265998 l 0.074,0.028 c 0.345997,0.144999 0.944993,0.266998 1.33399,0.266998 l 2.22498,0 c 0.380996,0 0.698993,-0.294997 0.698993,-0.644993 l 2.5e-5,-0.540986 0,-0.97299 0,-1.84398 c -0.277,0.108 -0.701,0.41099 -0.701,1.43398 z" />
            <rect
               height="3.1529701"
               id="ShadowExtra-3"
               x="22.4258"
               y="3.2899699"
               width="0.70299298" />
            <path
               style={{ fill: "#ffffff" }}
               id="ReflexRight-9"
               d="m 20.1588,0.892994 c 0.229998,0 0.490995,-0.100999 0.661993,-0.172998 0.201998,-0.0789991 0.576994,-0.143999 0.966989,-0.143999 l 1.46099,0 c 0.224998,0 0.224998,0.244997 0.224998,0.374996 0,0.129999 -0.016,0.381996 -0.224998,0.381996 l -3.06097,0 c -0.106999,0 -0.229998,-0.114999 -0.229998,-0.223998 0.006,-0.087001 0.078,-0.215997 0.200996,-0.215997 z" />
            <circle
               style={{ fill: "#ffffff" }}
               r="0.43199599"
               id="ReflexLeft-2"
               cx="7.4079399"
               cy="0.94299102" />
            <rect
               style={{ fillOpacity: 0.25, fill: "#ffffff" }}
               height="1.61999"
               id="Reflex_gold-8"
               x="22.4258"
               y="0.22999801"
               width="0.70299298" />
            <rect
               style={{ fill: "#ffffff" }}
               height="0.74899399"
               id="Reflex_extra-3"
               x="22.4258"
               y="0.58999401"
               width="0.70299298" />
          </g>
        </g>
      </g>
    </svg>
  }
}

export default class Resistance extends React.Component {
  get value() {
    // &#8486;
    let suffix = "";
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
  
  valueChanged(e) {
    store.dispatch({
      type: "VALUE_CHANGED",
      value: e.target.value
    });
  }
  
  render() {
    return <div className="resistance">
        <div className="input-infos center-block">
          <span className="input-box">
            <input type="text" value={ this.props.value.displayValue } onChange={ this.valueChanged }/>
            <span className="ohm">&#8486;</span>
          </span>
        </div>
        <div>
        {
          this.props.value.bandCount == 4 ?
            <Resistance4 bands={ this.props.value.bands }/> :
            <Resistance5 bands={ this.props.value.bands }/>
        }
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default" onClick={setBandCount.bind(this, 4)}>4 bandes</button>
              <button type="button" className="btn btn-default" onClick={setBandCount.bind(this, 5)}>5 bandes</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="btn-group">
              <button type="button" className="btn btn-default" onClick={setTolerance.bind(this, 0)}>&plusmn; 1%</button>
              <button type="button" className="btn btn-default" onClick={setTolerance.bind(this, 1)}>&plusmn; 2%</button>
              <button type="button" className="btn btn-default" onClick={setTolerance.bind(this, 2)}>&plusmn; 5%</button>
              <button type="button" className="btn btn-default" onClick={setTolerance.bind(this, 3)}>&plusmn; 10%</button>
            </div>
          </div>
        </div>
      </div>
  }
};
