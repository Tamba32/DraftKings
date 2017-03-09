import React from 'react';

import DropdownList from './../dropdown/DropdownList.jsx';

class Account extends React.Component {
  
  constructor() {
    super();
    this.state = {
      hover: false
    };
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }
  
  onMouseEnterHandler() {
    this.setState({hover: true});
  }
  
  onMouseLeaveHandler() {
    this.setState({hover: false});
  }
  
  get items() {
    return [
        { name: 'My Account',
          border: true,
          link: 'account'},
        { name: 'How To Play',
          link: 'how-to-play'},
        { name: 'Contest Rules',
          link: 'help/mlb'},
        { name: 'FAQ',
          border: true,
          link: 'help/faq'},
        { name: 'Mobile Apps',
          link: 'mobileapps'},
        { name: 'Refer-A-Friend',
          link: 'refer-a-friend'},
        { name: 'VIP Store',
          link: 'https://store.draftkings.com/'},
        { name: 'DKTV',
          link: '/video'},
        { name: 'Playbook',
          link: 'https://playbook.draftkings.com/'},
        { name: 'Contact Us',
          link: 'help/contact-us'},
        { name: 'Verify Me',
          border: true,
          link: 'account/verification'},
        { name: 'Sign Out',
          link: 'account/logout'},
    ];
  }
  
  render() {
    return (
      <li>
        <div className="account-container"
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}>
          <a href={"https://www.draftkings.com/account/"}>
            <div style={{overflow: "hidden"}}>
              <span>
                <img className="account-img"
                  src="https://d3oztknnwfahr3.cloudfront.net/dkjs2/6bdbd0a128f01fa2c8b0ba04f02d9d5f.png"/>
              </span>
              <div className="account-info">
                <span className="username-container">
                  <span className="username">Username</span>
                  <span className="arrow-container">
                    <i className="arrow-icon ion-chevron-down"></i>
                  </span>
                </span>
                <span className="username-container">
                  <span>
                    <span>$0.00</span>
                  </span>
                </span>
              </div>
            </div>
          </a>
          {this.state.hover ? <DropdownList items={this.items} type={''}/> : ''}
        </div>
      </li>
    );
  }
}

export default Account;