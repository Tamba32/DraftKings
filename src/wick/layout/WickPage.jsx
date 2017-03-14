import React, { Component } from 'react';
import './../css/app.css';
import './../css/body.css';
import './../css/new.css';
import bankShot01 from './../images/bankShot01.png';
import bankShot02 from './../images/bankShot02.png';
import Nav from './Nav.jsx';
import SubNav from './SubNav.jsx';
import Content from './Content.jsx';
import Lobby from './../components/lobby/Lobby.jsx';
import MarqueeContainer from './MarqueeContainer.jsx';

class WickPage extends Component {
  
  constructor() {
    super();
    this.state = {
      tab: 'featured'
    };
    
    this.setTabState = this.setTabState.bind(this);
  }
  
  get tabs() {
    return ['featured', 'nba', 'mlb', 'golf', 'nhl', 'nas', 'mma', 'soc', 'lol'];
  }
  
  setTabState(tab) {
    this.setState({tab});
  }
  
  render() {
    return (
      <div>
        <header>
          <Nav/>
          <SubNav tabs={this.tabs} tabState={this.state.tab} setTabState={this.setTabState}/>
        </header>
        <div className="page-content">
          <MarqueeContainer/>
          <div className="wrapper-container">
            <div className="wrapper">
              <img id="photo" src={bankShot01}/>
              <img id="photo-2" src={bankShot02}/>
            </div>
          </div>
          <Content content={this.state.tab}/>
        <Lobby/>
        </div>
      </div>
    );
  }
}

export default WickPage;
