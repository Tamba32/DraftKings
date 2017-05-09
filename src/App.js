import React, { Component } from 'react';

import './dk/css/app.css';

import DraftKings from './dk/DraftKings.jsx';

class App extends Component {
  
  render() {
    return (
      <div id="draftkings-app">
        <DraftKings/>
      </div>
    );
  }
}

export default App;
