import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CityWeatherHooks(props) {

    const [cityData, changeCityData] = useState({});



    //we need to make an ajax/htpp request to the API
    //we don't have lifecycle methods so we use useEffect
    //takes 2 args:
    //1. a callback that runs...
    //2. 'when' to run 1
    //1. undefined (no value) --> run EVERY render(componentDidMount + componentDidUpdate)
    //2. [] --> run on the first render ONLY (componentDidMount)
    //3. [...data] --> run on the first time and anytime a var in the array changes (componentDidMount +  modified componentDidUpdate)
    //4.(sort of) - if you return a function, that will run when the component unmounts (componentWillUnmount)

    useEffect(() => {
        const fetchWeather = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric&appid=ab34560068dc014a04dae465e051823b`;
            const response = await axios.get(url);
            changeCityData(response.data);
        };
        fetchWeather();
    }, [props.cityName]);

    if (!cityData.weather) {
        return (
            <h1>Loading...</h1>
        )
    }

    const iconUrl = `https://api.openweathermap.org/img/w/${cityData.weather[0].icon}.png`;
    return (
        <div className="container">
            <div className='city-name'>
                <h4>{cityData.name} - {cityData.main.temp.toFixed(0)} &#x2103;</h4>
            </div>
            <div className='temp'>
                <img src={iconUrl} alt='icon' />
                {cityData.weather[0].description}
                <p>High: {cityData.main.temp_max.toFixed(0)} &#x2103; - Low: {cityData.main.temp_min.toFixed(0)} &#x2103;</p>
                <p>Feels like: {cityData.main.feels_like.toFixed(0)} &#x2103;</p>
            </div>

        </div>
    )
}
export default CityWeatherHooks;
