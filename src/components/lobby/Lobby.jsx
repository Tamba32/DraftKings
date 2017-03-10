import React from 'react';

import LobbyRows from './LobbyRows.jsx';

class Lobby extends React.Component {

  get columnContent() {
    return [
      { title: 'Sport',
        width: 49 },
      { title: 'Contest',
        width: 362 },
      { title: 'Entry Fee',
        width: 83 },
      { title: 'Live',
        width: 154 },
      { title: 'Entries',
        width: 119 },
      { title: 'Live',
        width: 105}
    ];
  }
  
  get columns() {
    return this.columnContent.map((column, i) => (
      <div key={i} className="slick-header-column" style={{width: column.width + "px"}}>
        <span className="slick-column-name">{column.title}</span>
        <span className="slick-sort-indicator"></span>
      </div>
    ));
  }
  
  render() {
    return (
      <div className="dk-main">
        <div className="lobby">
          <div className="lobby-grid">
            <div className="slick-header">
              <div className="slick-header-columns">
                {this.columns}
                <div className="slick-header-column" style={{width: "76px"}}>
                  <span className="slick-column-name">
                    <a>
                      <i className="icon ion-loop"></i>
                      Refresh
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <LobbyRows/>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

export default Lobby;