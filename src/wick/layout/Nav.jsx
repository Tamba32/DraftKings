import React from 'react';

import Account from './../components/account/Account.jsx';
import DropdownList from './../components/dropdown/DropdownList.jsx';

class Nav extends React.Component {
  
  constructor() {
    super();
    this.state = {
      hover: {
        promo: false,
        notification: false,
      }
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnterPromo = this.handleMouseEnterPromo.bind(this);
    this.handleMouseLeavePromo = this.handleMouseLeavePromo.bind(this);
  }
  
  handleMouseEnterPromo() {
    this.handleMouseEnter('promo');
  }
  
  handleMouseLeavePromo() {
    this.handleMouseLeave('promo');
  }
  
  handleMouseEnter(div = 'promo') {
    this.setState({hover: {[div]: true}});
  }
  
  handleMouseLeave(div = 'promo') {
    this.setState({hover: {[div]: false}});
  }
  
  get items() {
    return [
    { name: 'FREE $20K Fantasy Basketball Championship',
      link: 'https://www.draftkings.com/lp/2017-free-nba-championship'},
    { name: 'Free Contest Arcade- Play Every Sport FREE!',
      link: 'https://www.draftkings.com/lp/free-contest-arcade'},
    { name: 'NBA $4M Fantasy Basketball World Championship',
      link: 'https://www.draftkings.com/lp/2017-basketball-world-championship'},
    { name: 'NBA $500K Bracket Challenge - 68 Qualifiers',
      link: 'https://www.draftkings.com/lp/2017-nba-bracket-challenge'},
    { name: 'NBA King of the Hill',
      link: 'https://www.draftkings.com/lp/2016-nba-king-of-the-hill'},
    { name: 'NBA $150K King of the Court',
      link: 'https://www.draftkings.com/lp/2017-king-of-the-court'},
    { name: 'NHL $400K Fantasy Hockey World Championship',
      link: 'https://www.draftkings.com/lp/2017-hockey-world-championship'},
    { name: 'NHL 3 Stars of the Night',
      link: 'https://www.draftkings.com/lp/2016-3starsofthenight'},
    { name: 'PGA $100K Pinehurst Classic (LIVE Event)',
      link: 'https://www.draftkings.com/lp/2017-golf-pinehurst'},
    { name: 'PGA Tiger Jam VIP Experience',
      link: 'https://www.draftkings.com/lp/2017-tiger-jam'},
    { name: 'EPL $150K King of the Pitch',
      link: 'https://www.draftkings.com/lp/2017-king-of-pitch'},
    { name: 'MMA $100K Bracket Challenge - 32 Qualifiers',
      link: 'https://www.draftkings.com/lp/2016-mma-bracket'},
    { name: 'MMA $250K Fight Card Series',
      link: 'https://www.draftkings.com/lp/fightcard-series-209'},
    { name: "LOL $30K Summoner's Series",
      link: 'https://www.draftkings.com/lp/2017-summoners-series'},
    { name: "Bucket List: Once-In-A-Lifetime Experiences!",
      link: 'https://www.draftkings.com/lp/bucketlist'},
    { name: 'Player Rewards Program',
      link: 'https://www.draftkings.com/lp/player-rewards'},
    { name: 'Refer A Friend: $10 DK',
      link: 'https://www.draftkings.com/lp/3-13-raf'}
    ];
  }
  
  get linkContent() {
    return [
      { name: 'Lobby',
        link: ''},
      { name: 'Lineups',
        link: 'lineup'},
      { name: 'Contests',
        link: 'mycontests'},
      { name: 'Leagues',
        link: 'leagues/home'},
      { name: 'Missons',
        icon: true,
        link: 'missions'},
    ];
  }
  
  get links() {
    return this.linkContent.map((link, i) => {
      const icon = link.icon ? 
        <img src="https://d3oztknnwfahr3.cloudfront.net/dkjs2/a0cd379a8cc0852ef9b69e3984bcd71c.svg" 
          className="ribbon-img"/> : '';
      return (
        <li key={i}>
          <a target="_blank" href={"https://www.draftkings.com/" + link.link}>
            {link.name}
          </a>
          {icon}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="header-inner"><div className="nav-container">
      <div className="nav-inner"><div className="nav-content">
        <div className="nav font">
          <div className="nav-left">
            <a href="/"><span className="logo-div"></span></a>
            <ul className="nav-list">
              {this.links}
              <li onMouseEnter={this.handleMouseEnterPromo}
                onMouseLeave={this.handleMouseLeavePromo}>
                <a href="#">Promos</a>
                {this.state.hover.promo ? 
                <DropdownList items={this.items} type={'-promo'}/> : ''}
              </li>
            </ul>
          </div>
          <NavRight hover={this.state.hover.notification} 
            handleMouseEnter={this.handleMouseEnter}
            handleMouseLeave={this.handleMouseLeave}/>
          <div className="nav-divider"></div>
        </div>
      </div></div></div></div>
    );
  }
}

class NavRight extends React.Component {
  
  constructor() {
    super();
    
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  
  handleMouseEnter() {
    this.props.handleMouseEnter('notification');
  }
  
  handleMouseLeave() {
    this.props.handleMouseLeave('notification');
  }
  
  render() {
    return (
      <div className="nav-right">
        <ul className="login-list">
          <li onMouseEnter={this.handleMouseEnter} 
              onMouseLeave={this.handleMouseLeave}>
            <div>
              <div className="notif-icon-container">
                <span className="notif-icon">
                  <i className="ion-android-notifications"></i>
                </span>
              </div>
              {this.props.hover ? <NotificationList/> : ''}
            </div>
          </li>
          <Account/>
          <li>
            <a className="deposit-button">
              <span>Deposit</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

class NotificationList extends React.Component {
  render() {
    return (
      <ul className="notification-popup-container">
        <div className="notification-popup">
          <span>
            <div className="notification-content">
              <span>
                <span>You have no notifications!</span>
              </span>
            </div>
          </span>
        </div>
      </ul>
    );
  }
}

export default Nav;