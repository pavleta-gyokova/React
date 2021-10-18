import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home/Home.js'
import NavBar from './utility/NavBar/NavBar.js'
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={NavBar}></Route>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/venue/:vid' component={SingleFullVenue}></Route>
      </Router>

    );
  }

}

export default App;