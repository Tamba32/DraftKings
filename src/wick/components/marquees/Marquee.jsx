import React from 'react';

class Marquee extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      hover: false
    };
    
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  
  handleMouseEnter() {
    this.setState({hover: true});
  }
  
  handleMouseLeave() {
    this.setState({hover: false});
  }

  get style() {
    return this.state.hover ? {filter: 'blur(2px)'} : null;
  }

  render() {
    return (
      <a href={'https://www.draftkings.com/' + this.props.link}
        onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div className="marquee">
          {this.state.hover ? <Rollover {...this.props.rollover}/>: ''}
          <img src={this.props.background} style={this.style} alt={this.props.rollover.title}/>
        </div>
      </a>
    );
  }
}

class Rollover extends React.Component {
  render() {
    return (
      <div className="rollover">
        <div className="rollover-inner">
          <div>{this.props.title}</div>
          <br/>
          <span>{this.props.details}</span>
          <span className="cta-link">
            {this.props.link}
            <i className="ion-chevron-right"></i>
          </span>
    
        </div>
      </div>
    );
  }
}

export default Marquee;