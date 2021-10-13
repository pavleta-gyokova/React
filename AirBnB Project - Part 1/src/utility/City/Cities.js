import React from 'react';
import City from './City.js';
import SlickSlider from '../Slider/Slider.js'

function Cities(props) {
    const cities = props.cities.map((city, index) => {
        return (
            <div className='col s3'>
                <City city={city} key={index} />
            </div>
        )
    })

    return (
        <div className='cities-wrapper'>
            <h1 className='main-header-text'>{props.header}</h1>
            <SlickSlider elements={cities} />
        </div>
    )

}
export default Cities;