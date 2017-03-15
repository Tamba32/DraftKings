import React from 'react';

import './kong.css';

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
import fifth2 from './images2/kong_BackMost.png';
import sixth2 from './images2/kong_Kong.png';
import seventh2 from './images2/kong_Sky.png';

class KongPage extends React.Component {
  
  get backgrounds() {
    return [...Array(3)].map((background, i) => (
      <div key={i} className={"background background-" + i}></div>
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
    return [zeroth2, first2, second2, third2, fourth2, fifth2, sixth2, seventh2].reverse();
  }
  
  get parallaxes2() {
    return this.content2.map((para, i) => (
      <div className={"parallax__layer parallax__layer__"+(i+1)}>
        <img src={para}/>
      </div>
    ));
  }
  
  render() {
    return (
      <div className="home-content">
        {this.backgrounds}
        <div className="parallax">
          {this.parallaxes2}
          <div className="parallax__cover"></div>
        </div>
      </div>
    );
  }
}

export default KongPage;