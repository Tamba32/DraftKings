import React, { Component } from 'react';
import './css/app.css';
import './css/body.css';
import './css/new.css';
import Logo from './images/logo.png';
import wickLogo from './images/wickLogo.png';
import bankShot01 from './images/bankShot01.png';
import bankShot02 from './images/bankShot02.png';
import Nav from './layout/Nav.jsx';
import SubNav from './layout/SubNav.jsx';
import Content from './layout/Content.jsx';
import Lobby from './components/lobby/Lobby.jsx';
import MarqueeContainer from './layout/MarqueeContainer.jsx';

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
              <img id="photo" src={bankShot01}/>
              <img id="photo-2" src={bankShot02}/>
              <div id="logo-container">
                <div className="logo-t">Presented By</div> 
                <div className="logo-text">Presented by</div>
                <img id="logo" src={Logo} />
                
                <div className="logo-text">Now Playing</div>
              </div>
            </div>
          </div>
          <Content content={this.state.tab}/>
        <Lobby/>
        </div>
        
      </div>
    );
  }
}

export default App;
