import React from 'react';

import LobbyRow from './LobbyRow.jsx';

class LobbyRows extends React.Component {
  
  get rowContent() {
    return [
    	{
        sport: 'golf',
        featured: true,
        name: '$3.5M Fantasy Golf Millionaire [$1M to 1st]',
        fee: '33',
        prizes: '3,500,000',
        entries: '1407/122.6K',
        live: '4/6 5:00a'
    	},
    	{
        sport: 'basketball',
        featured: false,
        name: 'Casual NBA $10K Sharpshooter [$10,000 Guaranteed]',
        fee: '3',
        prizes: '10,000',
        entries: '3921/3921',
        live: '00:00:00'
    	},
  	  {
        sport: 'golf',
        featured: true,
        name: 'PGA $600K Signature Hole [$100K to 1st]',
        fee: '4',
        prizes: '600,000',
        entries: '1400/176.4K',
        live: '3/16 6:00a'
  	  },
    	{
        sport: 'basketball',
        featured: false,
        name: 'Casual NBA $10K Sharpshooter [$10,000 Guaranteed]',
        fee: '27',
        prizes: '250,000',
        entries: '10.7/10.7K',
        live: '3/16 6:00a'
    	},
    	{
        sport: 'videogame',
        featured: true,
        name: 'LOL $200 First Blood [$200 Guaranteed] (EU LCS)',
        fee: '1',
        prizes: '200',
        entries: '7/235',
        m: true,
        live: 'Thu 11:00a'
    	},
    	{
        sport: 'soccer',
        featured: true,
        name: 'UCL $5 Double Up [$1,000 Gtd] (Multi-Entry)',
        fee: '5',
        prizes: '1,000',
        entries: '85/229',
        m: true,
        live: 'running'
    	},
    	{
        sport: 'baseball',
        featured: true,
        name: 'WBC $30K International First Pitch [$30,000 Guaranteed] (USA)',
        fee: '3',
        prizes: '30,000',
        entries: '2167/11.7K',
        m: true,
        live: 'Fri 6:00p'
    	},
    	{
        sport: 'mma',
        featured: true,
        name: 'MMA $60K Takedown [$60,000 Guaranteed]',
        fee: '3',
        prizes: '25,000',
        entries: '693/9803',
        m: true,
        live: 'Sat 6:30p'
    	},
    	{
        sport: 'golf',
        featured: true,
        name: 'PGA $50K Scramble [3 Entry Max, $50K Gtd]',
        fee: '3',
        prizes: '40,000',
        entries: '693/10.2K',
        m: true,
        live: 'Thu 6:30p'
    	},
    ];
  }
  
  get rows() {
    return this.rowContent.map((row, i) => (
      <LobbyRow key={i} row={row} index={i} length={this.rowContent.length}/>
    ));
  }
  
  render() {
    return (
      <div className="slick-viewport">
        <div className="grid-canvas">
          {this.rows}
        </div>
      </div>
    );
  }
}

export default LobbyRows;