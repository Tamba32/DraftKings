import React, { Component } from 'react';
import './css/app.css';
import './css/body.css';
import './css/new.css';
import Nav from './layout/Nav.jsx';
import SubNav from './layout/SubNav.jsx';
import Content from './layout/Content.jsx';
import Lobby from './components/lobby/Lobby.jsx';
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
        <Lobby/>
      </div>
    );
  }
}

export default App;
