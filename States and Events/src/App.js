import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {StateInAction} from './StateInAction.js'
// import SimpleEvents from './SimpleEvents.js'
// import EventAndState from './EventAndState.js'
// import StatePractice from './StatePractice.js'
import CardSet from './CardSet.js'
import cards from './cards.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        < CardSet cards={cards} />
      </div>
    );
  }

}

export default App;
