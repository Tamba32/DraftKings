import React from 'react';

import Marquee from './Marquee.jsx';

class Marquees extends React.Component {
  
  get marqueeContent() {
    return [
      {
        rollover: {
          title: 'Free Contest Arcade',
          details: 'Every Sport. Every Day. Completely FREE!',
          link: 'Play Now '
        },
        background: 'https://dkstatic.s3.amazonaws.com/cms-zones/marquee335x28.png',
        link: '/offer/acceptoffer?h=3548%257c2839128580%257c7603591%257chbD3KMrtuyBFd5%252fO9DCgJuiJjhQUmQgJuobrZvAjMTY%253d'
      },
      {
        rollover: {
          title: 'Claim Your FREE Entry',
          details: 'Get FREE $3 ENTRY with your first deposit (minimum $5)!',
          link: 'Claim Free Entry '
        },
        background: 'https://dkstatic.s3.amazonaws.com/cms-zones/freeentrygeneric335x28.png',
        link: '/offer/acceptoffer?h=4003%257c2839128580%257c7603591%257cojj34%252fx9MhirpmKE5HQv%252bbrzvQ0xXeviSzsUpdnL5kk%253d'
      },
      {
        rollover: {
          title: 'Learn How to Play',
          details: 'Learn how to get started!',
          link: 'Learn More  '
        },
        background: 'https://dkstatic.s3.amazonaws.com/cms-zones/howtoplayrndrndmarqueetest.png',
        link: '/offer/acceptoffer?h=2682%257c2839128580%257c7603591%257cOuJjACmyyrPN044D%252fIOLoPssHysKLrfff%252feG4b8bx6c%253d'
      },
    ];
  }
  
  get marquees() {
    return this.marqueeContent.map((marquee, i) => (
      <Marquee key={i} rollover={marquee.rollover}
      background={marquee.background} link={marquee.link}/>
    ));
  }
  
  render() {
    return (
      <div className="marquee-pictures">
        {this.marquees}
      </div>
    );
  }
}

export default Marquees;