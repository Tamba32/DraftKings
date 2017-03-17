import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import KongPage from './kong/KongPage.jsx';
import './wick/css/reset.css';
import { Router, Route, browserHistory } from 'react-router';

class Boujee extends React.Component {
  
  get backgrounds() {
    return [...Array(3)].map((background, i) => (
      <div key={i} className={"background-color background-0" + i}></div>
    ));
  }
  
  render() {
    return (
      <div className="home-content">
        {this.backgrounds}
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/dk" component={KongPage}/>
    <Route path="/b" component={Boujee}/>
  </Router>,
  document.getElementById('root')
);

