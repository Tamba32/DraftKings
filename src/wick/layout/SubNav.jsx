import React from 'react';

import Tabs from './../components/tabs/Tabs.jsx';

class SubNav extends React.Component {
  
  render() {
    return (
      <div className="subnav-container">
        <div className="subnav">
          <div className="subnav-content">
            <Tabs tabs={this.props.tabs} setTabState={this.props.setTabState}
              tabState={this.props.tabState}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SubNav;