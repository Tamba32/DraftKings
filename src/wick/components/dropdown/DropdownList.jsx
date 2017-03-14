import React from 'react';

import DropdownItem from './DropdownItem.jsx';

class DropdownList extends React.Component {
  
  get items() {
    return this.props.items.map((item, i) => (
      <DropdownItem key={i} name={item.name} link={item.link}
        border={item.border} length={this.props.items.length} index={i+1}/>
    ));
  }
  
  render() {
    return (
      <ul className={"dropdown-list" + this.props.type}>
        {this.items}
      </ul>
    );
  }
}

export default DropdownList;