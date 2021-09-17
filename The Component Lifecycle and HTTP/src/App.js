import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import Modal from './Modal.js';
import Headers from './Header.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      temp: '',
      cityName: '',
      weather: '',
      high: '',
      low: '',
      icon: '',
      isRaining: '',
      showModal: true
    }
  }
  componentDidMount() {
    this.getCityWeather("London")
    const elems = document.querySelectorAll('.modal');
    const instances = window.M.Modal.init(elems);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.weather !== prevState.weather) {
      const isRaining = this.state.weather.includes('rain');
      if (isRaining) {
        this.setState({
          isRaining: "It's raining. Get an umbrella!"
        })
      }
    }
  }

  searchCity = (event) => {
    event.preventDefault();
    const city = document.getElementById('city').value;
    this.getCityWeather(city)
  }

  getCityWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ab34560068dc014a04dae465e051823b`;
    axios.get(url).then((resp) => {
      this.setState({
        temp: resp.data.main.temp,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        weather: resp.data.weather[0].description,
        icon: resp.data.weather[0].icon,
        cityName: resp.data.name
      })
    })
  }

  render() {
    const iconUrl = `https://api.openweathermap.org/img/w/${this.state.icon}.png`;
    return (
      <div className="App" >
        <div className='row'>
          <div className='col s6 offset-s3'>
            <Headers data={this.state} />
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Details</a>
            <form onSubmit={this.searchCity}>
              <input type='text' id='city' placeholder='Enter a City Name' />
              <button className="waves-effect waves-light btn modal-trigger" >Submit</button>
            </form>
          </div>
        </div>
        {this.state.showModal ? <Modal data={this.state} icon={iconUrl} /> : ""}
      </div>
    );
  }
}

export default App;
