import React from 'react';

import './kong.css';
import './../wick/css/app.css';
import './../wick/css/body.css';
import './../wick/css/new.css';

import Lobby from './../wick/components/lobby/Lobby.jsx';
import Content from './../wick/layout/Content.jsx';

import $ from "jquery";

import zeroth2 from './images2/kong_Military.png';
import first2 from './images2/kong_Water.png';
import second2 from './images2/kong_Front.png';
import third2 from './images2/kong_3rdBackMost.png';
import fourth2 from './images2/kong_2ndBackMost.png';
import fifth2 from './images2/kong_Kong.png';
import sixth2 from './images2/kong_BackMost.png';
import seventh2 from './images2/kong_Sky.png';
import waterClear from './images2/kongBig_Logo.png'

// import koth from './images2/koth.png';

import koth from './words/words-01.png';
import become from './words/words-02.png';
import fantasy from './words/words-03.png';

import waterGraphic from './images2/waterGraphic.png';

class KongPage extends React.Component {
  
  componentDidMount() {
    $(window).resize(function() {
      console.log(window.innerWidth);
      $('#parallax__cover').css('left', 1500 - window.innerWidth/2 + 'px');
    });
  }
  
  get backgrounds() {
    return [...Array(3)].map((background, i) => (
      <div key={i} className={"background-color background-" + i}></div>
    ));
  }
  
  get content() {
    return [seventh2, sixth2, fifth2, fourth2, third2, second2, first2, zeroth2];
  }
  
  get parallaxes() {
    return this.content.map((para, i) => (
      <div className={"parallax__layer parallax__layer__"+(i)}>
        <img src={para} ref="img"/>
      </div>
    ));
  }
  
  get style() {
    return {
      left: 1500 - window.innerWidth/2 + 'px',
      background: 'url(' + waterGraphic+  ') center / cover no-repeat, linear-gradient(to bottom, #294654, #000000)'
    };
  }
  
  render() {
    return (
      <div className="home-content">
        {this.backgrounds}
        <div className="parallax">
          {this.parallaxes}
          <div className={"parallax__layer parallax__layer__"+(8)}>
            <img src={waterClear} ref="img"/>
            <div id="parallax__cover" style={this.style}>
              <div id="kk-holder">
                <img id="become" src={become} ref='img'/>
                <img id="fantasy" src={fantasy} ref='img'/>
                <div className="media-row">
                  <img id="koth" src={koth} ref='koth'/>
                  <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/44LdLqgOpjo" frameborder="0"
                    allowfullscreen>
                  </iframe>
                </div>
              </div>
              <Content/>
              <Lobby/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KongPage;