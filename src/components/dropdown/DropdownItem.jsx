import React from 'react';

class DropdownItem extends React.Component {
  
  get style() {
    if (!this.props.border) return;
    return {
      borderBottom: "1px solid #e9e8ea",
      paddingBottom: "6px",
      marginBottom: "6px"
    };
  }
  
  get link() {
    const { link } =this.props;
    return link.indexOf('http') > -1 ? link : "https://www.draftkings.com/" + link;
  }
  
  render() {
    return (
      <li style={this.style}>
        <a target="_blank" href={this.link}>
          {this.props.name}
        </a>
      </li>
    );
  }
}

export default DropdownItem;