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
  
  getAnchor(link) {
    return link.indexOf('http') > -1 ? link : "https://www.draftkings.com/" + link;
  }
  
  get links() {
    return this.linkContent.map((link, i) => {
      const divider = (i + 1) < this.linkContent.length ? '|' : '';
      return (
        <span key={i}>
          <a href={this.getAnchor(link.link)} className="link-icon">
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
      </div>
    );
  }
}

export default Content;