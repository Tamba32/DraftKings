import React from 'react';

import Tab from './Tab.jsx';

class Tabs extends React.Component {
  
  get tabs() {
    return this.props.tabs.map((tab, i) => (
      <Tab key={i} tab={tab} setTabState={this.props.setTabState}
        tabState={this.props.tabState}/>
    )); 
  }
  
  get disabledTabs() {
    return ['NFL', 'CFL'].map((tab, i) => (
      <li key={i}>
        <span className="disabled">
          <a>{tab}</a>
        </span>
      </li>
    )); 
  }
  
  render() {
    return (
      <ul className="subnav-list">
        {this.tabs}
        {this.disabledTabs}
      </ul>
    );
  }
}

export default Tabs;