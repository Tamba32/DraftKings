import React from 'react';

import './kong.css';
import './../wick/css/app.css';
import './../wick/css/body.css';
import './../wick/css/new.css';

import Lobby from './../wick/components/lobby/Lobby.jsx';

import $ from "jquery";

import zeroth from './images/0.png';
import first from './images/1.png';
import second from './images/2.png';
import third from './images/3.png';
import fourth from './images/4.png';
import fifth from './images/5.png';
import sixth from './images/6.png';

import zeroth2 from './images2/kong_Military.png';
import first2 from './images2/kong_Water.png';
import second2 from './images2/kong_Front.png';
import third2 from './images2/kong_3rdBackMost.png';
import fourth2 from './images2/kong_2ndBackMost.png';
import fifth2 from './images2/kong_Kong.png';
import sixth2 from './images2/kong_BackMost.png';
import seventh2 from './images2/kong_Sky.png';

import koth from './images2/koth.png';

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
    return [zeroth, first, second, third, fourth, fifth, sixth].reverse();
  }
  
  get parallaxes() {
    return this.content.map((para, i) => (
      <div className={"parallax__layer parallax__layer__"+(i+1)}>
        <img src={para}/>
      </div>
    ));
  }
  
  get content2() {
    return [seventh2, sixth2, fifth2, fourth2, third2, second2, first2];
  }
  
  get parallaxes2() {
    return this.content2.map((para, i) => (
      <div className={"parallax__layer parallax__layer__"+(i)}>
        <img src={para}/>
      </div>
    ));
  }
  
  get width() {
    console.log(window.innerWidth);
    return {width: window.innerWidth};
    // if (window.innerWidth >= 925) return;
    
    
  }
  
  render() {
    console.log($)
    return (
      <div className="home-content">
        {this.backgrounds}
        <div className="parallax">
          {this.parallaxes2}
          <div className={"parallax__layer parallax__layer__"+(7)}>
            <img src={zeroth2}/>
            <div id="parallax__cover">
              <img src={koth}/>
              <Lobby/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KongPage;