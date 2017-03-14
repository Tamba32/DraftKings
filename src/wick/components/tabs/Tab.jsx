import React from 'react';

class Tab extends React.Component {
  
  constructor() {
    super();
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.setTabState(this.props.tab);
  }
  
  get active() {
    return (this.props.tabState === this.props.tab ? 'active' : '');
  }
  
  render() {
    return (
      <li onClick={this.handleClick}>
        <span className={this.active}>
          <a>{this.props.tab}</a>
        </span>
      </li>
    );
  }
}

export default Tab;
