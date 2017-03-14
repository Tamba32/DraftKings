import React from 'react';

import Marquees from './../components/marquees/Marquees.jsx';

class MarqueeContainer extends React.Component {
  
  componentDidMount() {
    this.getText(false);
  }
  
  getText(bool) {
    let interval = !bool;
    let html;
    document.getElementById('marquee-text').innerHTML = '';
    if (interval) {
      html = `<a href="http://playbook.draftkings.com/">
                Get Strategy and Tips to Help Build Your Lineup! Check Out 
                the DraftKings Playbook! 
              </a>`;
    } else {
      html = `<a href="http://draftkings.com//account/depositnewvisitorinterstitial">
                Get a FREE $3 Entry to Start Playing When You Make Your First Deposit!
              </a>`;
    }
    document.getElementById('marquee-text').innerHTML = html;
    return setTimeout(() => {this.getText(interval)}, 10000);
  }
  
  render() {
    return (
      <div className="marquee-zone">
        <div className="marquee-content">
          <Marquees/>
          <div className="marquee-text-container">
            <div id="marquee-text"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarqueeContainer;