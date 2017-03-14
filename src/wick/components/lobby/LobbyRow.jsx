import React from 'react';

class LobbyRow extends React.Component {
  
  getIcon(sport) {
    switch(sport) {
      case 'basketball':
        return 'ion-ios-basketball';
      case 'baseball':
        return 'ion-ios-baseball';
      case 'mma':
        return 'ion-android-hand';
      case 'soccer': 
        return 'ion-ios-football';
      case 'golf':
        return 'ion-ios-americanfootball';
      case 'videogame':
        return 'ion-ios-game-controller-b';
    }
  }
  
  componentDidMount() {
    this.highlightText;
  }
  
  get highlightText() {
    const {index} = this.props;
    const num = Math.floor(Math.random() * 6);
    const rows = document.getElementsByClassName('slick-row');
    if (index%6 === num) {
      rows[index].className += ' active';
      setTimeout(() => {rows[index].classList.remove('active')}, 1200);
    }
    setTimeout(() => {this.highlightText},  6000);
  }
  
  render() {
    return (
      <div className="slick-row">
        <div className="slick-cell">
          <i className={"icon " + this.getIcon(this.props.row.sport)}></i>
          <i className="icon ion-star"></i>
        </div>
        <div className="slick-cell">
          <a href="#">{this.props.row.name}</a>
        </div>
        <div className="slick-cell">
          <a>{"$" + this.props.row.fee}</a>
        </div>
        <div className="slick-cell">
          <a>
            <i className="icon ion-social-hackernews"></i>
            <span>{"$" + this.props.row.prizes}</span>
          </a>
        </div>
        <div className="slick-cell">
          <a>
            {this.props.row.m ? <i className="icon ion-social-markdown"></i> : ''}
            <span>{this.props.row.entries}</span>
          </a>
        </div>
        <div className="slick-cell">
          <a>
            <span>{this.props.row.live}</span>
          </a>
        </div>
        <div className="slick-cell">
          <a>Enter</a>
        </div>
      </div>
    );
  }
}

export default LobbyRow;