import React, { Component } from 'react';
import logo from './logo.svg';
import './css/app.css';
import './css/body.css';
import Nav from './layout/Nav.jsx';
import SubNav from './layout/SubNav.jsx';
import Content from './layout/Content.jsx';
import MarqueeContainer from './layout/MarqueeContainer.jsx';
import draftKings from './images/draftKings.png';

class App extends Component {
  
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
      <div className="App">
        <header>
          <Nav/>
          <SubNav tabs={this.tabs} tabState={this.state.tab} setTabState={this.setTabState}/>
        </header>
        <div className="page-content">
          <MarqueeContainer/>
          <div className="wrapper-container">
            <div className="wrapper">
              <div className="tri-top tri"></div>
              <div className="tri-bottom tri"></div>
              <img id="photo" src={draftKings} />
            </div>
          </div>
        </div>
        <Content content={this.state.tab}/>
      </div>
    );
  }
}

export default App;
