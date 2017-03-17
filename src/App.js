import React, { Component } from 'react';

import WickPage from './wick/layout/WickPage.jsx';
import KongPage from './kong/KongPage.jsx';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <WickPage/>
        {/*<KongPage/>*/}
      </div>
    );
  }
}

export default App;
