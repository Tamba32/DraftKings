import React from 'react';

class Content extends React.Component {
  
  get linkContent() {
    return [
      {
        link: 'create-contest',
        text: 'Create a Contest',
        icon: 'ion-trophy'
      },
      {
        link: 'lineup/#create-lineup',
        text: 'Create a Lineup',
        icon: 'ion-document-text'
      },
      {
        link: 'http://playbook.draftkings.com',
        text: 'Strategy & Research',
        icon: 'ion-clipboard'
      },
      {
        link: 'refer-a-friend',
        text: 'Refer a Friend',
        icon: 'ion-person'
      },
    ];
  }
  
  get links() {
    return this.linkContent.map((link, i) => {
      const divider = (i + 1) < this.linkContent.length ? '|' : '';
      return (
        <span key={i}>
          <a href={link.link} className="link-icon">
            <i className={link.icon}></i>
            <span>{link.text}</span>
          </a>
          {divider}
        </span>
      );
    });
  }
  
  render() {
    return (
      <div className="content">
        <div className="marquee-content">
          <div className="marquee-links">
            {this.links}
          </div>
        </div>
        <div id="content_data">
          <div className="title">
            <div style={{width:"5%"}}><span>Sport</span></div>
            <div style={{width:"38.2%"}}><span>Contest</span></div>
            <div style={{width: "10%"}}><span>EntryFee</span></div>
            <div style={{width:"12%"}}><span>TotalPrizes</span></div>
            <div style={{width:"12%"}}><span>Entries</span></div>
            <div style={{width:"5%"}}><span>Live</span></div>
          </div>
          <div className="grid" id="grid">
          </div>
        </div>
      </div>
    );
  }
}

export default Content;