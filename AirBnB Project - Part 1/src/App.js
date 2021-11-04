import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home/Home.js'
import NavBar from './utility/NavBar/NavBar.js'
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue';
import Modal from './utility/Modal/Modal';
import CityVenues from './pages/CityVenues/CityVenues';
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess';
import Account from './pages/Account/Account';
import Search from './pages/Search/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={NavBar}></Route>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/venue/:vid' component={SingleFullVenue}></Route>
        <Route exact path='/city/:cityName' component={CityVenues}></Route>
        <Route path='/' component={Modal}></Route>
        <Route exact path='/payment-success/:token' component={PaymentSuccess}></Route>
        <Route path='/account' component={Account}></Route>
        <Route path='/search/:searchTerm' component={Search}></Route>
      </Router>

    );
  }

}

export default App;
