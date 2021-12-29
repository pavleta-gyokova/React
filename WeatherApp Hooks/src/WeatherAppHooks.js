import React, { useState } from 'react'
import CityWeatherHooks from './CityWeatherHooks';

function WeatherApp(props) {

    const [city, changeCity] = useState('London');
    const [cityNameForWeather, changeCityForWeather] = useState('London');


    const searchCity = (e) => {
        e.preventDefault();
        changeCityForWeather(city);
    }


    return (
        <div className='container'>
            <CityWeatherHooks cityName={cityNameForWeather} />
            <div className="row justify-content-center">
                <form onSubmit={searchCity}>
                    <input type='text' value={city} placeholder='Enter a City Name' onChange={(e)=>changeCity(e.target.value)} />
                    <button className="btn btn-primary" value='Search' >Submit</button>
                </form>
            </div>
        </div>

    )
}

export default WeatherApp;